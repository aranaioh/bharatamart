import { useState, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import Star from "../star";
import AddToCartButton from "../addtocartButton";
import { IoMdHeartEmpty, IoIosGitCompare } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ProductDetailDialogs from "./ProductDetailsDialogs";


const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [mainImgIdx, setMainImgIdx] = useState(0);
    const imgDivRef = useRef(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isUtils, setIsUtils] = useState(false);
    // Mouse move: change image based on horizontal position
    const handleMouseMove = (e) => {
        const rect = imgDivRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const section = rect.width / product.images.length;
        const idx = Math.min(
            product.images.length - 1,
            Math.max(0, Math.floor(x / section))
        );
        setMainImgIdx(idx);
    };

    // Mouse leave: reset to first image
    const handleMouseLeave = () => setMainImgIdx(0);

    return (
        <>
            <div onMouseEnter={() => setIsUtils(true)} onMouseLeave={() => setIsUtils(false)} className="relative border border-gray-200 bg-white shadow-sm p-2 max-w-xs w-full flex flex-col">
                <div
                    className="relative w-full aspect-square rounded-lg overflow-hidden mb-3 cursor-pointer group"
                    ref={imgDivRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        src={product.images[mainImgIdx]}
                        alt={product.title}
                        className="object-contain w-full h-full transition-all duration-200"
                    />

                    {/* Discount badge */}
                    {product.discountPercentage && (
                        <div className="absolute top-2 left-2 z-10">
                            <Badge className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold shadow">-{product.discountPercentage}%</Badge>
                        </div>
                    )}

                    {/* New badge */}
                    {product.isNew && (
                        <div className="absolute top-10 left-2 z-10">
                            <Badge className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">NEW</Badge>
                        </div>
                    )}

                </div>
                <div className="flex flex-col flex-1">
                    <div className="font-medium text-sm line-clamp-2 mb-1 min-h-[44px]">{product?.title}</div>
                    <div className="flex items-center my-1">
                        <Star value={product?.ratingValue} />
                        <span className="ml-2 text-xs text-gray-400">({product?.ratingCount})</span>
                    </div>
                    <div className="flex items-center gap-2 my-1">
                        {product.inStock ? (
                            <span className="text-green-700 text-sm font-medium flex items-center">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#0E9035" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                In stock
                            </span>
                        ) : (
                            <span className="text-red-600 text-sm font-medium flex items-center">
                                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#dc2626" strokeWidth="2" d="M6 6l12 12M6 18L18 6" /></svg>
                                Out of stock
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="line-through text-gray-400 text-sm">₹{product?.oldPrice?.toLocaleString()}</span>
                        <span className="text-xl font-bold text-blue-900">₹{product?.newPrice?.toLocaleString()}</span>
                    </div>
                    <AddToCartButton />
                </div>

                {isUtils && (
                    <div className="absolute flex flex-col gap-2 top-5 right-5 px-2 text-2xl py-2 bg-white rounded-lg z-50">
                        {/* Compare Icon with Tooltip */}
                        <div className="relative group flex items-center">
                            <span className="absolute right-full mr-2 px-2 py-1 rounded bg-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Compare</span>
                            <IoIosGitCompare onClick={() => navigate(`/compare`)} />
                        </div>
                        {/* Quick View Icon with Tooltip */}
                        <div className="relative group flex items-center">
                            <span className="absolute right-full mr-2 px-2 py-1 rounded bg-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Quick View</span>
                            <IoEye onClick={() => setIsDialogOpen(true)} />
                        </div>
                        {/* Wishlist Icon with Tooltip */}
                        <div className="relative group flex items-center">
                            <span className="absolute right-full mr-2 px-2 py-1 rounded bg-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">Wishlist</span>
                            <IoMdHeartEmpty onClick={() => navigate(`/wishlist`)} />
                        </div>
                    </div>
                )}
            </div>


            <ProductDetailDialogs open={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />

        </>
    );
};

export default ProductCard;