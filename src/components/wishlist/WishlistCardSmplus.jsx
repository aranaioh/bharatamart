import { FaArrowDown } from "react-icons/fa6";
import Star from "../ui/star";
import { DeleteIcon } from "lucide-react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import AddToCartButton from "../ui/addtocartButton";


const data = {
    "images": "/home/todaydeals/bc2.webp",

    "title": {
        "shortTitle": "Samsung Galaxy S23 Ultra",
        "longTitle": "Samsung Galaxy S23 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)"
    },

    "variants": [
        {
            "quantity": 1,
            "price": {
                "mrp": 139999,
                "discount": 15,
                "cost": 118999,
            }
        }
    ],

    "ratingValue": 4.8,
    "ratingCount": 1200,
}

const WishlistCardSmplus = ({ product = data }) => {
    return (
        <div className="w-full lg:px-10 px-5  ">
            <div className="w-full flex relative shadow-2xl hover:scale-101 h-40 gap-5 p-3 bg-white rounded-lg shadow-md transition-transform duration-300 ease-in-out">
                <div className="">
                    <img src={product.images} alt={product.title?.shortTitle} className="max-sm:w-full max-sm:h-full md:w-full h-full w-[200px] rounded-md object-cover" />
                </div>

                <div className="flex flex-col justify-between max-xl:pr-16">
                    <div>
                        <h3 className="phone-title font-semibold leading-[22px] w-full overflow-x-hidden opacity-50">{product?.title?.shortTitle} | {product?.title?.longTitle}</h3>
                        <div className="flex gap-2 items-center ">

                            {product?.variants[0]?.price?.discount > 0 && (
                                <div className="flex items-center text-green-500 text-sm">
                                    <FaArrowDown className="text-xs" />
                                    {Math.floor(product?.variants[0]?.price?.discount)}%
                                </div>
                            )}

                            {(product?.variants[0]?.price?.mrp?.toFixed(2)) > (product?.variants[0]?.price?.cost.toFixed(2)) ? (
                                <div className="flex gap-1 text-sm">
                                    <h4 className="old-price line-through font-semibold text-gray-500">
                                        ₹{Math.floor(product?.variants[0]?.price?.mrp)}
                                    </h4>
                                    <h4 className="new-price">₹{product?.variants[0]?.price?.cost}</h4>
                                </div>
                            ) : (
                                <h2 className="old-price">
                                    ₹{Math.floor(product?.variants[0]?.price?.mrp)}
                                </h2>
                            )}

                        </div>
                        <div className="phone-rating flex items-center">
                            <div className="flex"> <Star value={product?.ratingValue} /></div>
                            <span className="text-sm">({product?.ratingCount})</span>
                        </div>
                    </div>

                    <div className="w-[200px]">
                        <AddToCartButton />
                    </div>
                </div>
                <div className="absolute top-5 bg-[#eee] text-red-500 rounded-full shadow-xl right-5 p-3"> <RiDeleteBin6Fill /></div>
            </div>
        </div>
    );
}

export default WishlistCardSmplus;