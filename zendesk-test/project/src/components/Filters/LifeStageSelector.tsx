import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { LifeStage } from '../../types';
import { ChevronDown } from 'lucide-react';

const LifeStageSelector: React.FC = () => {
  const { filters, setFilters } = useAppContext();
  
  const handleLifeStageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as LifeStage | '';
    setFilters({ lifeStage: value ? value as LifeStage : null });
  };
  
  if (!filters.petType) return null;
  
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        Life Stage
      </label>
      <div className="relative">
        <select
          value={filters.lifeStage || ''}
          onChange={handleLifeStageChange}
          className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2 pr-8 text-neutral-700 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 appearance-none"
        >
          <option value="">All Life Stages</option>
          <option value="puppy">Puppy/Kitten</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default LifeStageSelector;