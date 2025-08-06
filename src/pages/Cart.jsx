import { useNavigate } from "react-router-dom";
import Cardforcart from "../components/cart/Cardforcart";

const product = [
    {
        id: 1,
        image: "/home/todaydeals/bc2.webp",
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        price: 100,
        quantity: 1,
        discount: 10,
        discountPrice: 90,
    },
    {
        id: 2,
        image: "/home/todaydeals/bc1.png",
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        price: 100,
        quantity: 1,
        discount: 10,
        discountPrice: 90,
    },
    // {
    //     id: 3,
    //     image: "/home/todaydeals/bc1.png",
    //     title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
    //     price: 100,
    //     quantity: 1,
    //     discount: 10,
    //     discountPrice: 90,
    // }
]

const Cart = ({ products = product }) => {
    const navigate = useNavigate();

    // Calculate totals
    const totalItems = products.reduce((acc, p) => acc + (p.quantity || 1), 0);
    const totalPrice = products.reduce((acc, p) => acc + (p.price * (p.quantity || 1)), 0);
    const totalDiscount = products.reduce((acc, p) => acc + ((p.discount || 0) * (p.quantity || 1)), 0);
    const totalDiscountedPrice = products.reduce((acc, p) => acc + ((p.discountPrice || p.price) * (p.quantity || 1)), 0);
    const platformFee = 4;

    const handlePlaceOrder = async () => {
        try {
            // const orderDetails = {
            //     items: products.map(p => ({})),
            //     totalPrice: totalDiscountedPrice + platformFee,
            // };
            console.log("Placing order with details:");
            navigate("/checkout");
            // Here you would typically call an API to place the order
        } catch (error) {
            console.error("Error placing order:", error);
            // Handle error (e.g., show toast notification)
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row md:items-start md:gap-6 p-2 md:p-6 lg:p-10">
            {products?.length > 0 ? (
                <>
                    {/* Cart Items */}
                    <div className="flex-1 w-full md:w-2/3">
                        <div className="bg-white rounded-lg shadow p-4 mb-4">
                            <h2 className="text-lg font-semibold mb-2">Deliver to: <span className="font-bold">Aran Choudhary, 800001</span></h2>
                            <p className="text-gray-600 text-sm">MAURYA BOYS HOSTEL, GORIYA ASTHAN, Patna</p>
                            <button className="border px-3 py-1 rounded text-primary-bg border-primary-bg text-xs mt-2">Change</button>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            {products.map((product) => (
                                <Cardforcart key={product.id} product={product} onRemove={() => console.log("Remove", product.id)} />
                            ))}
                        </div>
                        <div className="md:flex hidden w-full  mt-4 mb-4">
                            <button onClick={handlePlaceOrder} className="bg-primary-bg text-white w-full  py-3 rounded text-lg font-semibold">PLACE ORDER</button>
                        </div>
                    </div>

                    {/* Price Details */}
                    <div className=" w-full max-md:mt-4 md:w-1/3">
                        <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                            <h3 className="font-semibold mb-4">PRICE DETAILS</h3>
                            <div className="flex justify-between mb-2 text-sm">
                                <span>Price ({totalItems} item{totalItems > 1 ? 's' : ''})</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <div className="flex justify-between mb-2 text-sm">
                                <span>Discount</span>
                                <span className="text-green-600">-₹{totalDiscount}</span>
                            </div>
                            <div className="flex justify-between mb-2 text-sm">
                                <span>Platform Fee</span>
                                <span>₹{platformFee}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg mt-4">
                                <span>Total Amount</span>
                                <span>₹{totalDiscountedPrice + platformFee}</span>
                            </div>
                            <div className="text-green-600 text-sm mt-2">You will save ₹{totalDiscount} on this order</div>
                        </div>
                    </div>

                    <div className="flex md:hidden w-full mt-4 mb-4">
                        <button onClick={handlePlaceOrder} className="bg-primary-bg cursor-pointer text-white w-full  py-3 rounded text-lg font-semibold">PLACE ORDER</button>
                    </div>
                </>
            ) : (
                <div className="text-center p-10">
                    <h2 className="text-xl font-semibold">Your cart is empty</h2>
                    <button onClick={() => navigate("/shop")} className="bg-primary-bg text-white px-4 py-2 rounded">Shop Now</button>
                </div>
            )}
        </div>
    );
}

export default Cart;