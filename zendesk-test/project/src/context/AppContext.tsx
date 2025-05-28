import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { FilterState, PetType, Product, SpecialCare, SpecialCareGroupResponse, SpecialCareList } from '../types';
import { fetchProducts, fetchSpecialCares } from '../services/api';
import { useDebounce } from '../hooks/useDebounce';

interface AppContextType {
  // State
  filters: FilterState;
  products: Product[];
  specialCares: SpecialCare[];
  loading: boolean;
  error: string | null;
  countryId: string;

  // Actions
  setFilters: (filters: Partial<FilterState>) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  petType: null,
  foodType: null,
  isPregnancy: false,
  isLactation: false,
  lifeStage: null,
  specialCares: []
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFiltersState] = useState<FilterState>(defaultFilters);
  const [products, setProducts] = useState<Product[]>([]);
  const [specialCares, setSpecialCares] = useState<SpecialCare[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [countryId] = useState<string>('MA'); // Default to MA as per API example

  const debouncedFilters = useDebounce(filters, 300);

  useEffect(() => {
    const getSpecialCares = async () => {
      try {
        setLoading(true);
        setError(null);

        const data: SpecialCareGroupResponse | null = await fetchSpecialCares(countryId, filters.petType as PetType);

        if (data) {
          const cares = data?.specialcares?.flatMap((result: SpecialCareList) =>
            result.list.flatMap((care: SpecialCare) => {
              return {
                specialcare_id: care.specialcare_id,
                specialcare_name: care.specialcare_name,
                specialcare_type: care.specialcare_type
              }
            })
          );

          setSpecialCares(cares);
        }


      } catch (err) {
        setError(typeof err === 'string' ? err : 'Failed to load special cares data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getSpecialCares();
  }, [countryId, filters.petType]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        if (debouncedFilters.petType) {
          const data = await fetchProducts(debouncedFilters, countryId);
          setProducts(Object.values(data.products));
        }
      } catch (err) {
        setError(typeof err === 'string' ? err : 'Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [debouncedFilters, countryId]);

  const setFilters = (newFilters: Partial<FilterState>) => {
    setFiltersState(prev => ({
      ...prev,
      ...newFilters
    }));
  };

  const resetFilters = () => {
    setFiltersState(defaultFilters);
  };

  return (
    <AppContext.Provider
      value={{
        filters,
        products,
        specialCares,
        loading,
        error,
        countryId,
        setFilters,
        resetFilters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};