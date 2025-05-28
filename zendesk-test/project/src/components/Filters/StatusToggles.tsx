import React from 'react';
import { useAppContext } from '../../context/AppContext';
import clsx from 'clsx';

const StatusToggles: React.FC = () => {
  const { filters, setFilters } = useAppContext();
  
  const handlePregnancyToggle = () => {
    setFilters({ isPregnancy: !filters.isPregnancy });
  };
  
  const handleLactationToggle = () => {
    setFilters({ isLactation: !filters.isLactation });
  };
  
  if (!filters.petType) return null;
  
  return (
    <div className="flex flex-col space-y-4 mb-6 sm:flex-row sm:space-y-0 sm:space-x-6">
      <div className="flex items-center">
        <button 
          type="button"
          onClick={handlePregnancyToggle}
          className={clsx(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
            filters.isPregnancy ? "bg-primary-500" : "bg-neutral-300"
          )}
        >
          <span 
            className={clsx(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              filters.isPregnancy ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        <span className="ml-2 text-sm text-neutral-700">Pregnancy</span>
      </div>
      
      <div className="flex items-center">
        <button 
          type="button"
          onClick={handleLactationToggle}
          className={clsx(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
            filters.isLactation ? "bg-primary-500" : "bg-neutral-300"
          )}
        >
          <span 
            className={clsx(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              filters.isLactation ? "translate-x-6" : "translate-x-1"
            )}
          />
        </button>
        <span className="ml-2 text-sm text-neutral-700">Lactation</span>
      </div>
    </div>
  );
};

export default StatusToggles;