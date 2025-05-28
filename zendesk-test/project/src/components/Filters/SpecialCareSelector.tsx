import React, { useState, useRef, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import { ChevronDown, X, Check } from 'lucide-react';
import clsx from 'clsx';

const SpecialCareSelector: React.FC = () => {
  const { filters, setFilters, specialCares } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredSpecialCares = specialCares;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSpecialCareToggle = (careId: string) => {
    const updatedCares = filters.specialCares.includes(careId)
      ? filters.specialCares.filter(id => id !== careId)
      : [...filters.specialCares, careId];

    setFilters({ ...filters, specialCares: updatedCares });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!filters.petType || filteredSpecialCares.length === 0) { 
    return null;
  }

  return (
    <div className="mb-6" ref={dropdownRef}>
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        Special Care
      </label>
      <div className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="flex w-full justify-between items-center rounded-lg border border-neutral-300 bg-white px-4 py-2 text-neutral-700 hover:bg-neutral-50"
        >
          <span className="truncate">
            {filters.specialCares.length
              ? `${filters.specialCares.length} selected`
              : 'Select special care needs'}
          </span>
          <ChevronDown className={clsx("h-4 w-4 transition-transform", isOpen && "transform rotate-180")} />
        </button>

        {/* Exibir os cuidados especiais selecionados */}
        {filters.specialCares.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {filters.specialCares.map(careId => {
              const care = specialCares.find(c => c.specialcare_id === careId);
              return (
                <div
                  key={careId}
                  className="flex items-center bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full"
                >
                  <span>{care?.specialcare_name}</span>
                  <button
                    type="button"
                    onClick={() => handleSpecialCareToggle(careId)}
                    className="ml-1 text-primary-500 hover:text-primary-700"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              );
            })}
          </div>
        )}

        {/* Dropdown para selecionar cuidados especiais */}
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg max-h-60 overflow-auto">
            <div className="py-1">
              {filteredSpecialCares.map(care => (
                <div
                  key={care.specialcare_id}
                  className="flex items-center px-4 py-2 hover:bg-neutral-100 cursor-pointer"
                  onClick={() => handleSpecialCareToggle(care.specialcare_id)}
                >
                  <div className={clsx(
                    "w-5 h-5 mr-3 flex items-center justify-center border rounded",
                    filters.specialCares.includes(care.specialcare_id)
                      ? "bg-primary-500 border-primary-500"
                      : "border-neutral-300"
                  )}>
                    {filters.specialCares.includes(care.specialcare_id) && (
                      <Check className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="text-sm">{care.specialcare_name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialCareSelector;