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
    {
        id: 3,
        image: "/home/todaydeals/bc1.png",
        title: "AMEYAA Back Cover for IPHONE 15 (Pink, Shock Proof, Pack of: 1)",
        price: 100,
        quantity: 1,
        discount: 10,
        discountPrice: 90,
    }
]

const Cart = ({ products = product }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-200">
            {products?.length > 0 ? (
                <>
                    <div className="flex flex-col gap-6 p-4 sm:p-6 md:p-10">
                        {products?.map((product) => (
                            <Cardforcart
                                key={product.id}
                                product={product}
                                onRemove={() => { }}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between items-center p-4">
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => { }}
                        >
                            Clear Cart
                        </button>
                    </div>
                    <div className="flex justify-between items-center p-4">
                        <span>Total Items: {products.length}</span>
                        <span>Total Price: {products.reduce((acc, product) => acc + product.price * product.quantity, 0)}</span>
                        <button className="bg-primary-bg text-white px-4 py-2 rounded">Checkout</button>
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