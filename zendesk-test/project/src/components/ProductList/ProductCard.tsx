import React from 'react';
import { Product, SpecialCare } from '../../types';
import { useAppContext } from '../../context/AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { specialCares } = useAppContext();
  
  const productSpecialCares: SpecialCare[] = specialCares.filter((care: SpecialCare) =>
    Object.values(product.specialcares).some(specialCareId => specialCareId.id === care.specialcare_id)
  );
  
  return (
  <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300">
    <div className="h-48 bg-neutral-100 flex items-center justify-center overflow-hidden">
      {product.img ? (
        <img 
          src={product.img} 
          alt={product.name} 
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="text-neutral-400 text-xl">No Image Available</div>
      )}
    </div>
    
    <div className="p-4">
      <h3 className="text-lg font-semibold text-neutral-800 mb-2 line-clamp-2">
        {product.name}
      </h3>
      
      <div className="space-y-3">
        {/* Pet Type & Food Type */}
        <div className="flex gap-2">
          <span className="inline-flex items-center justify-center px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
            {product.type === 'dog' ? 'Dog' : 'Cat'}
          </span>
          <span className="inline-flex items-center justify-center px-2 py-1 bg-secondary-100 text-secondary-800 text-xs rounded-full">
            {product.productType === 'dry' ? 'Dry Food' : 'Wet Food'}
          </span>
          <span className="inline-flex items-center justify-center px-2 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full">
              {Object.values(product.lifeStages).map((stage, idx) => (
                <span
                  key={stage + idx}
                  className="inline-flex items-center justify-center px-2 py-1 bg-neutral-100 text-neutral-800 text-xs rounded-full"
                >
                  {stage}
                </span>
              ))}
          </span>
        </div>
        
        {/* Special Cares */}
        {productSpecialCares.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-neutral-700 mb-1">Special Care:</h4>
            <div className="flex flex-wrap gap-1">
              {productSpecialCares.map(care => (
                <span 
                  key={care.specialcare_id}
                  className="inline-block px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                >
                  {care.specialcare_name}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Price */}
        {Object.values(product.formats).length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-neutral-700 mb-1">Price:</h4>
            <div className="flex flex-wrap gap-2">
              {Object.values(product.formats).map((format, idx) => (
                <span
                  key={format.ean + idx}
                  className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                >
                  {format.format}: {format.price} {product.currency}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Specifications */}
        {product.description && product.description.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-neutral-700 mb-1">Description:</h4>
            <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
              {product.description}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
);
};

export default ProductCard;