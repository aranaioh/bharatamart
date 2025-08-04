import EmptyWishlist from "../components/wishlist/Emptywishlist";
import PhonewishlistproductCard from "../components/wishlist/PhonewishlistproductCard";
import WishlistCardSmplus from "../components/wishlist/WishlistCardSmplus";

const Wishlist = () => {

    const products = [
        {
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
        },
        {
            images: [
                "/home/todaydeals/bc2.webp",
                "/home/todaydeals/bc1.png",
                "/home/todaydeals/bc3.webp",
                "/home/todaydeals/bc4.webp",
            ],
            title: "Noise ColorFit Pro 4 Alpha 1.78\" AMOLED Smart Watch",
            inStock: true,
            isNew: false,
            actualPrice: 3499.0,
            discountPercentage: 20,
            description:
                "1.78\" AMOLED Display, Bluetooth Calling, 60Hz Refresh Rate, 100+ Sports Modes, 7-day Battery Life.",
            SKU: "NCP4A2",
            ratingCount: 250,
            ratingValue: 4.2,
            oldPrice: 4399.0,
            newPrice: 3499.0,
        },
        {
            images: [
                "/home/todaydeals/bc3.webp",
                "/home/todaydeals/bc1.png",
                "/home/todaydeals/bc2.webp",
                "/home/todaydeals/bc4.webp",
            ],
            title: "boAt Stone 1200 14W Bluetooth Speaker (Black)",
            inStock: false,
            isNew: true,
            actualPrice: 2999.0,
            discountPercentage: 40,
            description:
                "14W RMS Stereo Sound, 9H Playback, RGB LEDs, IPX7 Waterproof, TWS Feature.",
            SKU: "BST1200",
            ratingCount: 180,
            ratingValue: 4.7,
            oldPrice: 4999.0,
            newPrice: 2999.0,
        },
        {
            images: [
                "/home/todaydeals/bc4.webp",
                "/home/todaydeals/bc1.png",
                "/home/todaydeals/bc2.webp",
                "/home/todaydeals/bc3.webp",
            ],
            title: "Mi 10000mAh Power Bank 3i (Blue)",
            inStock: true,
            isNew: false,
            actualPrice: 1199.0,
            discountPercentage: 25,
            description:
                "18W Fast Charging, Dual Output, Two-way Fast Charge, Slim Design.",
            SKU: "MI3I10000",
            ratingCount: 320,
            ratingValue: 4.3,
            oldPrice: 1599.0,
            newPrice: 1199.0,
        },
        {
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
        }
    ]

    return (
        <div className="bg-gray-200">
            {products?.length > 0 ? (
                <>
                    <div className="max-sm:flex hidden grid grid-cols-2 gap-6 p-4 sm:p-6 md:p-10">
                        <PhonewishlistproductCard />
                        <PhonewishlistproductCard />
                    </div>
                    <div className="w-full flex-col gap-5 hidden sm:flex py-10">
                        <WishlistCardSmplus />
                        <WishlistCardSmplus />
                        <WishlistCardSmplus />
                        <WishlistCardSmplus />
                    </div>
                </>
            ) : (
                <div className="w-full p-4 bg-white rounded text-black min-h-[70%]">
                    <EmptyWishlist />
                </div>
            )}
        </div>
    );
}

export default Wishlist;