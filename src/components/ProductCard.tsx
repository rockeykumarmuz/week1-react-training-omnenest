import type { Product } from "../types/productType";

interface PropType {
  product: Product;
}

const ProductCard: React.FC<PropType> = ({ product }) => {
  return (
    <div className="group flex flex-col w-full max-w-70 bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] mt-6 border border-gray-100">
      
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden bg-gray-50">
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-gray-700 shadow-sm">
            {product.category}
          </span>
        </div>
        <img 
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110" 
          src={product.image} 
          alt={product.title} 
          loading="lazy" 
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col grow p-4">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 h-10 mb-2">
          {product.title}
        </h3>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          <button className="p-2 bg-gray-900 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;