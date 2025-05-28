import React from 'react';
import { useAppContext } from '../../context/AppContext';
import PetTypeSelector from './PetTypeSelector';
import FoodTypeSelector from './FoodTypeSelector';
import StatusToggles from './StatusToggles';
import LifeStageSelector from './LifeStageSelector';
import SpecialCareSelector from './SpecialCareSelector';
import { FilterX } from 'lucide-react';

const Filters: React.FC = () => {
  const { resetFilters } = useAppContext();
  
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-neutral-800">Filters</h2>
        <button
          type="button"
          onClick={resetFilters}
          className="flex items-center text-sm text-neutral-600 hover:text-primary-500"
        >
          <FilterX className="h-4 w-4 mr-1" />
          Reset Filters
        </button>
      </div>
      
      <div className="space-y-4">
        <PetTypeSelector />
        <FoodTypeSelector />
        <StatusToggles />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <LifeStageSelector />
          <SpecialCareSelector />
        </div>
      </div>
    </div>
  );
};

export default Filters;