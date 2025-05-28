import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { PetType } from '../../types';
import { Dog, Cat } from 'lucide-react';
import clsx from 'clsx';

const PetTypeSelector: React.FC = () => {
  const { filters, setFilters } = useAppContext();
  
  const handleSelectPetType = (type: PetType) => {
    setFilters({ petType: type });
  };
  
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        Pet Type
      </label>
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() => handleSelectPetType('dog')}
          className={clsx(
            "flex flex-1 items-center justify-center py-2 px-4 border rounded-lg transition-colors",
            filters.petType === 'dog' 
              ? "bg-primary-500 text-white border-primary-500" 
              : "bg-white text-neutral-700 border-neutral-300 hover:bg-primary-50"
          )}
        >
          <Dog className="h-5 w-5 mr-2" />
          <span>Dog</span>
        </button>
        
        <button
          type="button"
          onClick={() => handleSelectPetType('cat')}
          className={clsx(
            "flex flex-1 items-center justify-center py-2 px-4 border rounded-lg transition-colors",
            filters.petType === 'cat' 
              ? "bg-primary-500 text-white border-primary-500" 
              : "bg-white text-neutral-700 border-neutral-300 hover:bg-primary-50"
          )}
        >
          <Cat className="h-5 w-5 mr-2" />
          <span>Cat</span>
        </button>
      </div>
    </div>
  );
};

export default PetTypeSelector;