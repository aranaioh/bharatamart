import Star from "../star";

const ProductCardRecent = ({ product }) => {
    return (
        <div className="flex items-start bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-4 m-2 w-64 min-w-[240px] max-w-xs">
            <img 
                src={product.images && product.images[0]} 
                alt={product.title} 
                className="object-contain rounded-lg w-16 h-16 mr-4 flex-shrink-0 bg-gray-50 border border-gray-100" 
            />
            <div className="flex flex-col flex-1 justify-between">
                <h3 className="text-base font-semibold leading-tight mb-1 line-clamp-2">{product.title}</h3>
                <div className="flex items-center mb-1">
                    <Star value={product?.ratingValue} />
                    <span className="ml-2 text-xs text-gray-400">({product?.ratingCount})</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                    <span className="line-through text-gray-400 text-sm">₹{product?.oldPrice?.toLocaleString()}</span>
                    <span className="text-lg font-bold text-blue-900">₹{product?.newPrice?.toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCardRecent;