import React from "react";

const CartProductCard = ({ product, onRemove, onQuantityChange }) => {
  return (
    <div className="flex gap-3 py-4 border-b last:border-b-0">
      <img
        src={product.image}
        alt={product.title}
        className="w-16 h-16 object-contain rounded bg-gray-100"
      />
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="font-medium text-sm line-clamp-2 mb-1">{product.title}</div>
          <div className="text-xs text-gray-500 mb-1">SKU: {product.sku}</div>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <button
            className="px-2 py-1 border rounded"
            onClick={() => onQuantityChange(product, product.quantity - 1)}
            disabled={product.quantity <= 1}
          >
            -
          </button>
          <span className="px-2">{product.quantity}</span>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => onQuantityChange(product, product.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button
          className="text-gray-400 hover:text-red-500 text-lg"
          onClick={() => onRemove(product)}
        >
          ×
        </button>
        <div className="text-blue-900 font-bold text-sm mt-2">₹{product.price.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default CartProductCard; 