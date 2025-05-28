import axios from 'axios';
import { FilterState, ApiResponse, ProductsResponse, PetType, SpecialCareGroupResponse } from '../types';

const API_BASE_URL = 'https://farmina-test-back.onrender.com/api';

// Create an axios instance with common config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Error handling middleware with specific error codes
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.data?.error) {
      const errorCode = error.response.data.error.code;
      switch (errorCode) {
        case 1027:
          return Promise.reject('Invalid country code specified');
        case 1085:
          return Promise.reject('Invalid product type specified');
        case 1011:
          return Promise.reject('Invalid species specified');
        case 1014:
          return Promise.reject('Invalid life stage specified');
        case 1017:
          return Promise.reject('Invalid size specified');
        case 1046:
          return Promise.reject('Invalid gestation value specified');
        case 1047:
          return Promise.reject('Invalid lactation value specified');
        case 1086:
          return Promise.reject('Invalid special care - must be for the correct species and type');
        case 1110:
          return Promise.reject('Non-existent protein specified');
        case 1113:
          return Promise.reject('Invalid language specified');
        case 1167:
          return Promise.reject('Invalid appsAndEshop value');
        case 1168:
          return Promise.reject('Non-existent excluded protein');
        default:
          return Promise.reject(error.response.data.error.message || 'An unexpected error occurred');
      }
    }
    return Promise.reject('Network error occurred');
  }
);

export const fetchProducts = async (filters: FilterState, countryId: string): Promise<ProductsResponse> => {
  try {
    const payload = {
      country: countryId,
      languageId: "20", // Default language ID as per example
      type: filters.petType?.toLowerCase(),
      productType: filters.foodType?.toLowerCase(),
      gestation: filters.isPregnancy,
      lactation: filters.isLactation,
      lifeStage: filters.lifeStage?.toLowerCase(),
      specialcares: filters.specialCares.length > 0 ? filters.specialCares : undefined,
      appsAndEshop: true
    };

    const response = await api.post<ApiResponse<ProductsResponse>>('/products', payload);
    
    const products = Object.entries(response.data.result.products).reduce((acc, [id, product]) => {
      acc[id] = { ...product, id };
      return acc;
    }, {} as { [key: string]: typeof response.data.result.products[string] & { id: string } });

    return {
      ...response.data.result,
      products,
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchSpecialCares = async (countryId: string, specie: PetType): Promise<SpecialCareGroupResponse | null> => {
  try {
    const payload = {
      country: countryId,
      languageId: "1",
      type: "dietetic",
      species: specie
    };

    const response = await api.post<ApiResponse<SpecialCareGroupResponse[]>>('/specialcares', payload);

    
    if (response.data.status !== '200' || !response.data.result) {
      return null;
    }
    return response.data.result[0] as SpecialCareGroupResponse;
  } catch (error) {
    console.error('Error fetching special cares:', error);
    throw error;
  }
};