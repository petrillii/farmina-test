import React from 'react';
import { useAppContext } from '../../context/AppContext';
import ProductCard from './ProductCard';
import { Loader } from '../UI/Loader';
import { ErrorMessage } from '../UI/ErrorMessage';
import { SearchX } from 'lucide-react';

const ProductList: React.FC = () => {
  const { products, loading, error, filters } = useAppContext();
  
  if (!filters.petType) {
    return (
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <SearchX className="h-16 w-16 text-neutral-400 mb-4" />
          <h3 className="text-xl font-medium text-neutral-700 mb-2">No Products to Display</h3>
          <p className="text-neutral-500 max-w-md">
            Please select a pet type from the filters above to start browsing products.
          </p>
        </div>
      </div>
    );
  }
  
  if (loading) {
    return <Loader />;
  }
  
  if (error) {
    return <ErrorMessage message={error} />;
  }
  
  if (products.length === 0) {
    return (
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <div className="flex flex-col items-center justify-center py-12">
          <SearchX className="h-16 w-16 text-neutral-400 mb-4" />
          <h3 className="text-xl font-medium text-neutral-700 mb-2">No Products Found</h3>
          <p className="text-neutral-500 max-w-md">
            No products match your current filter criteria. Try adjusting your filters to see more products.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;