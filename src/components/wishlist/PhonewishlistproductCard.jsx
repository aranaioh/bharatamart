import AddToCartButton from "../ui/addtocartButton";
import Star from "../ui/star";
import { FaArrowDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { RiDeleteBin6Fill } from "react-icons/ri";



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
                "mrp": 1399,
                "discount": 15,
                "cost": 1189,
            }
        }
    ],

    "ratingValue": 4.8,
    "ratingCount": 120,
}

const PhonewishlistproductCard = ({ product = data }) => {
    return (
        <div className="w-full flex relative flex-col bg-white rounded-lg shadow-md">
            <div className="p-2">
                <img src={product.images} alt={product.title?.shortTitle} className="w-full h-full rounded-md" />
            </div>

            <div className="px-2 pb-2">
                <h3 className="phone-title font-semibold leading-[22px] w-full overflow-x-hidden opacity-50">{product?.title?.shortTitle.slice(0, 16)} ...</h3>
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
                                ₹{Math.floor(product?.variants[0]?.price?.mrp)}                        </h4>
                            <h4 className="new-price">₹{product?.variants[0]?.price?.cost}</h4>
                        </div>
                    ) : (
                        <h2 className="old-price">
                            ₹{Math.floor(product?.variants[0]?.price?.mrp)}                        </h2>
                    )}

                </div>
                <div className="phone-rating flex items-center">
                    <div className="flex"> <Star value={product?.ratingValue} /></div>
                    <span className="text-sm">({product?.ratingCount})</span>
                </div>
            </div>

            <div className="absolute right-3 font-semibold top-3 p-2 rounded-full bg-white">
                {/* <RxCross2/> */}
                <RiDeleteBin6Fill className="text-red-500 hover:text-red-500 cursor-pointer" />
            </div>

            <AddToCartButton />
        </div>
    );
}

export default PhonewishlistproductCard;