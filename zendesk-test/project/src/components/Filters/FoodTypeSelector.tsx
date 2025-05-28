import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { FoodType } from '../../types';
import clsx from 'clsx';

const FoodTypeSelector: React.FC = () => {
  const { filters, setFilters } = useAppContext();
  
  const handleSelectFoodType = (type: FoodType) => {
    setFilters({ foodType: type });
  };
  
  if (!filters.petType) return null;
  
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        Food Type
      </label>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => handleSelectFoodType('dry')}
          className={clsx(
            "flex flex-1 items-center justify-center py-2 px-4 border rounded-lg transition-colors",
            filters.foodType === 'dry' 
              ? "bg-primary-500 text-white border-primary-500" 
              : "bg-white text-neutral-700 border-neutral-300 hover:bg-primary-50"
          )}
        >
          <span>Dry Food</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleSelectFoodType('wet')}
          className={clsx(
            "flex flex-1 items-center justify-center py-2 px-4 border rounded-lg transition-colors",
            filters.foodType === 'wet' 
              ? "bg-primary-500 text-white border-primary-500" 
              : "bg-white text-neutral-700 border-neutral-300 hover:bg-primary-50"
          )}
        >
          <span>Wet Food</span>
        </button>
      </div>
    </div>
  );
};

export default FoodTypeSelector;