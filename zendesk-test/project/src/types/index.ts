export interface Product {
  id: string;
  line: string;
  name: string;
  description: string;
  ingredients: string;
  additives: string;
  components: string;
  url: string;
  img: string;
  img_thumbnail: string;
  weeksOn: boolean;
  purpose: 'maintenance' | 'veterinarycare';
  productType: 'dry' | 'wet';
  type: 'dog' | 'cat';
  currency: string;
  calories: string;
  proteinId: string;
  proteinName: string;
  specialcares: {
    [key: string]: {
      id: string;
      name: string;
    };
  };
  lifeStages: {
    [key: string]: string;
  };
  sizes: {
    [key: string]: string;
  };
  formats: {
    [key: string]: {
      format: string;
      price: string;
      cans_per_package: string;
      ean: string;
      eshopProposal: boolean;
      storeProposal: boolean;
    };
  };
  eshopFormats: {
    [key: string]: {
      format: string;
      price: string;
      cans_per_package: string;
      ean: string;
      available: boolean;
    };
  };
}

export interface SpecialCare {
  specialcare_id: string;
  specialcare_name: string;
  specialcare_type: 'maintenance' | 'dietetic' | 'specialcare';
}

export interface SpecialCareGroup {
  species: 'dog' | 'cat';
  list: SpecialCare[];
}

export type PetType = 'dog' | 'cat';
export type FoodType = 'dry' | 'wet';
export type LifeStage = 'puppy' | 'adult' | 'senior';

export interface FilterState {
  petType: PetType | null;
  foodType: FoodType | null;
  isPregnancy: boolean;
  isLactation: boolean;
  lifeStage: LifeStage | null;
  specialCares: string[];
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  result: T;
}

export interface ProductsResponse {
  country: string;
  lifeStage: LifeStage;
  lactation: boolean;
  gestation: boolean;
  products: { [key: string]: Product };
}

export interface SpecialCareGroupResponse {
  country: string;
  languageId: string;
  specialcares: SpecialCareList[]
}

export interface SpecialCareList {
  list: SpecialCare[]
}

export interface SpecialCaresResponse {
 message: string;
 status: string;
 result: SpecialCareGroupResponse[];
}