import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Dog } from 'lucide-react';

const Header: React.FC = () => {
  const { countryId } = useAppContext();

  return (
    <header className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Dog className="h-8 w-8 text-primary-500 mr-2" />
          <h1 className="text-2xl font-bold text-neutral-800">Farmina Pet Consult</h1>
        </div>
        
        <div className="flex items-center bg-primary-50 px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-primary-700">
            Country: {countryId}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;