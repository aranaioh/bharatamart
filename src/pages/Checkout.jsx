

import { useState } from "react";
import { RadioGroup } from "../components/ui/radio-group";
import { Button } from "../components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { useAuth } from "../context/AuthContext";

const paymentOptions = [
    { value: "cod", label: "Cash on Delivery" },
    { value: "paypilot", label: "Paypilot (Online Payment)" },
    { value: "others", label: "Others" },
];


const mockProducts = [
    {
        name: "Smart Watch",
        price: 2999,
        qty: 1,
        image: "/public/home/popular/smart-watch.jpg",
    },
    {
        name: "Classic Watch",
        price: 1999,
        qty: 2,
        image: "/public/home/popular/watch.jpg",
    },
];

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState("cod");
    const { user } = useAuth();

    const handlePaymentChange = (value) => {
        setSelectedPayment(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement payment logic
        alert(`Selected payment: ${selectedPayment}`);
    };

    const totalPrice = mockProducts.reduce((sum, p) => sum + p.price * p.qty, 0);

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col items-center">

            <div className="w-full flex justify-between py-2 px-10 border-b border-gray-300 items-center">
                <img src="/Bharatmart_logo_200.png" alt="logo" className="w-20 h-20" />

                <div className=" border-2 border-black rounded-full h-16 w-16">
                    <Avatar>
                        <AvatarImage src={user?.avatar || "/Bharatmart_logo_200.png"} alt={user?.name || "User"} className={`w-full h-full`} />
                    </Avatar>
                </div>
            </div>

            {/* Main Checkout Card */}
            <div className="w-[85%] flex bg-white">
                

                <Card className="w-1/2">
                    <CardHeader>
                        <CardTitle>Payment Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <RadioGroup value={selectedPayment} onValueChange={handlePaymentChange} className="flex flex-col gap-4">
                                {paymentOptions.map((option) => (
                                    <label key={option.value} className="flex items-center gap-3 cursor-pointer p-3 rounded border border-gray-200 hover:bg-gray-50">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value={option.value}
                                            checked={selectedPayment === option.value}
                                            onChange={() => handlePaymentChange(option.value)}
                                            className="accent-primary-bg w-5 h-5"
                                        />
                                        <span className="text-base font-medium">{option.label}</span>
                                    </label>
                                ))}
                            </RadioGroup>
                            <Button type="submit" className="w-full bg-primary-bg text-white font-semibold py-2 rounded">Checkout</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

        </div>
    );
};

export default Checkout;