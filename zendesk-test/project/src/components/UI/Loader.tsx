import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-16 w-full">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-primary-500 animate-spin"></div>
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary-300 animate-spin absolute top-4 left-4"></div>
      </div>
    </div>
  );
};