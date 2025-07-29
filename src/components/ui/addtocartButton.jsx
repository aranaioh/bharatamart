import { ShoppingCart } from 'lucide-react';

export default function AddToCartButton() {
  return (
    <div className="relative w-full group overflow-hidden rounded-lg shadow-lg bg-white h-10">
      <div
        className="
          absolute top-0 left-0 right-0
          h-10 flex bg-primary-bg text-white font-semibold text-sm justify-center items-center
          transition-transform duration-200
          translate-y-0 group-hover:-translate-y-full
        "
      >
        Add To cart
      </div>
      <div
        className="
          absolute bottom-0 left-0 right-0
          bg-orange-500 text-white
          flex items-center justify-center
          h-10
          translate-y-full group-hover:translate-y-0
          transition-transform duration-200
        "
      >
        <button className="flex items-center space-x-2 text-sm font-medium">
          <ShoppingCart className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
}
