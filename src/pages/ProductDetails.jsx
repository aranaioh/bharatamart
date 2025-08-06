import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Star } from "lucide-react";

const ProductDetails = () => {
  // Sample product data (replace with API data from backend)
  const product = {
    images: [
      "/home/todaydeals/bc1.png",
      "/home/todaydeals/bc2.webp",
      "/home/todaydeals/bc3.webp",
      "/home/todaydeals/bc4.webp",
    ],
    title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
    inStock: true,
    isNew: true,
    actualPrice: 999.0,
    discountPercentage: 34,
    description:
      "This luxurious case features a glitter diamond camera protector that adds a touch of sparkle and glamour. The clear, transparent design showcases your phone’s sleek lines while the plated bling rhinestone detailing creates a dazzling effect.",
    SKU: "MABC1",
    ratingCount: 100,
    ratingValue: 4.5,
    oldPrice: 1499.0,
    newPrice: 999.0,
    brand: "AMEYAA",
    category: "Mobile Accessories",
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT: Image Gallery */}
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Vertical Thumbnails for large screens */}
          <div className="hidden lg:flex flex-col gap-3 w-20">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border hover:border-black"
                onClick={() => setThumbsSwiper(idx)}
              />
            ))}
          </div>

          {/* Main Image / Swiper for Small Screens */}
          <div className="flex-1">
            {/* Large screen: Show clicked image */}
            <div className="hidden lg:block">
              <img
                src={product.images[thumbsSwiper || 0]}
                alt="product"
                className="w-full h-[500px] object-contain rounded-lg bg-white p-4 shadow-lg"
              />
            </div>

            {/* Small screen: Swiper */}
            <div className="lg:hidden">
              <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                className="rounded-lg shadow-lg bg-white"
              >
                {product.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`slide-${idx}`}
                      className="w-full h-[350px] object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-semibold">{product.title}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < Math.floor(product.ratingValue) ? "gold" : "none"}
                  stroke="gold"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({product.ratingCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mt-4">
            <h2 className="text-2xl font-bold text-red-600">
              ₹{product.newPrice.toFixed(0)}
            </h2>
            <span className="line-through text-gray-500">
              ₹{product.oldPrice.toFixed(0)}
            </span>
            <span className="text-green-600 font-medium">
              {product.discountPercentage}% Off
            </span>
          </div>

          {/* Stock / SKU */}
          <p className="mt-2 text-sm">
            <span className="font-semibold">SKU:</span> {product.SKU}
          </p>
          <p
            className={`mt-1 text-sm font-semibold ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>

          {/* Brand & Category */}
          <p className="mt-2 text-sm">
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          {/* Description */}
          <div className="mt-4">
            <h3 className="font-semibold text-lg">Product Description</h3>
            <p className="text-gray-700 text-sm mt-2">{product.description}</p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              Add to Cart
            </button>
            <button className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
