import React from "react";
import { Sheet, SheetContent, SheetClose, SheetHeader } from "../index";
import CartProductCard from "./CartProductCard";
import { useNavigate } from "react-router-dom";

const mockProducts = [
        {
            image: "https://via.placeholder.com/64",
            title: "Sample Product",
            sku: "SKU123",
            quantity: 1,
            price: 499,
        },
        {
            image: "https://via.placeholder.com/64",
            title: "Sample Product",
            sku: "SKU123",
            quantity: 1,
            price: 499,
        },
        {
            image: "https://via.placeholder.com/64",
            title: "Sample Product",
            sku: "SKU123",
            quantity: 1,
            price: 499,
        },
        {
            image: "https://via.placeholder.com/64",
            title: "Sample Product",
            sku: "SKU123",
            quantity: 1,
            price: 499,
        },
        {
            image: "https://via.placeholder.com/64",
            title: "Sample Product",
            sku: "SKU123",
            quantity: 1,
            price: 499,
        },
];

const CartDrawer = ({ isOpen, onClose, products = mockProducts }) => {
    const navigate = useNavigate();
    const handleRemove = (product) => {};
    const handleQuantityChange = (product, qty) => {};
    const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

    return (
        <Sheet open={isOpen} onOpenChange={open => { if (!open) onClose(); }}>
            <SheetContent
                side="right"
                className="min-w-[300px] max-w-[400px] w-full h-full p-0 flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-3 border-b">
                    <h2 className="text-xl font-semibold">Shopping cart</h2>
                    <SheetClose asChild>
                        <button className="text-xl text-gray-400 hover:text-black">&times; Close</button>
                    </SheetClose>
                </div>
                {/* Product List or Empty State */}
                {products.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                        <div className="text-6xl text-gray-200 mb-4">🛒</div>
                        <div className="text-lg font-semibold mb-2">No products in the cart.</div>
                        <SheetClose asChild>
                            <button
                                className="mt-4 px-6 py-2 bg-blue-900 text-white rounded"
                            >
                                Return To Shop
                            </button>
                        </SheetClose>
                    </div>
                ) : (
                    <div className="flex-1 overflow-y-auto px-6 py-2">
                        {products.map((product) => (
                            <CartProductCard
                                key={product.sku}
                                product={product}
                                onRemove={handleRemove}
                                onQuantityChange={handleQuantityChange}
                            />
                        ))}
                    </div>
                )}
                {/* Footer */}
                {products.length > 0 && (
                    <div className="px-6 py-4 border-t bg-white">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-medium">Subtotal:</span>
                            <span className="text-2xl font-bold text-blue-900">₹{subtotal.toLocaleString()}</span>
                        </div>
                        <button onClick={() => navigate("/mycart")} className="w-full py-3 bg-blue-900 text-white rounded text-lg font-semibold mb-2">View Cart</button>
                        <button className="w-full py-3 bg-blue-900 text-white rounded text-lg font-semibold">Checkout</button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default CartDrawer;