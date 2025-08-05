import Searchbar from "../layout/Searchbar";

const Orders = [
    {
        products: [

            {
                productId: {
                    _id: "21356789876543DFDGFG",
                    title: {
                        shortTitle: "Product short title",
                        longTitle: "This is a longer version of the product title that provides more details about the product."
                    },
                    image: "/home/todaydeals/bc2.webp"
                },

                totalAmount: 1199,
                qty: 1,
                size: "M",
                color: "Red",

                orderStatus: {
                    orderConfirmed: {
                        isConfirmed: true,
                        date: "2023-10-01",
                    },
                    shipped: {
                        isConfirmed: false,
                        date: "2023-10-05",
                    },
                    outForDelivery: {
                        isConfirmed: false,
                        date: "2023-10-10",
                    },
                    delivered: {
                        isConfirmed: false,
                        date: "2023-10-15",
                    },
                    cancel: {
                        isConfirmed: false,
                        date: "2023-10-20",
                    },
                    refunded: {
                        isConfirmed: false,
                        date: "2023-10-25",
                    }
                },

            }
        ]
    },
    {
        products: [

            {
                productId: {
                    _id: "21356789876543DFDGFG",
                    title: {
                        shortTitle: "Product Title",
                        longTitle: "This is a longer version of the product title that provides more details about the product."
                    },
                    image: "/home/todaydeals/bc2.webp"
                },

                totalAmount: 1199,
                qty: 1,
                size: "M",
                color: "Red",

                orderStatus: {
                    orderConfirmed: {
                        isConfirmed: true,
                        date: "2023-10-01",
                    },
                    shipped: {
                        isConfirmed: false,
                        date: "2023-10-05",
                    },
                    outForDelivery: {
                        isConfirmed: false,
                        date: "2023-10-10",
                    },
                    delivered: {
                        isConfirmed: false,
                        date: "2023-10-15",
                    },
                    cancel: {
                        isConfirmed: false,
                        date: "2023-10-20",
                    },
                    refunded: {
                        isConfirmed: false,
                        date: "2023-10-25",
                    }
                },

            }
        ]
    },
    {
        products: [

            {
                productId: {
                    _id: "21356789876543DFDGFG",
                    title: {
                        shortTitle: "Product Title",
                        longTitle: "This is a longer version of the product title that provides more details about the product."
                    },
                    image: "/home/todaydeals/bc2.webp"
                },

                totalAmount: 1199,
                qty: 1,
                size: "M",
                color: "Red",

                orderStatus: {
                    orderConfirmed: {
                        isConfirmed: true,
                        date: "2023-10-01",
                    },
                    shipped: {
                        isConfirmed: false,
                        date: "2023-10-05",
                    },
                    outForDelivery: {
                        isConfirmed: false,
                        date: "2023-10-10",
                    },
                    delivered: {
                        isConfirmed: false,
                        date: "2023-10-15",
                    },
                    cancel: {
                        isConfirmed: false,
                        date: "2023-10-20",
                    },
                    refunded: {
                        isConfirmed: false,
                        date: "2023-10-25",
                    }
                },

            }
        ]
    },
    {
        products: [

            {
                productId: {
                    _id: "21356789876543DFDGFG",
                    title: {
                        shortTitle: "Product Title",
                        longTitle: "This is a longer version of the product title that provides more details about the product."
                    },
                    image: "/home/todaydeals/bc2.webp"
                },

                totalAmount: 1199,
                qty: 1,
                size: "M",
                color: "Red",

                orderStatus: {
                    orderConfirmed: {
                        isConfirmed: true,
                        date: "2023-10-01",
                    },
                    shipped: {
                        isConfirmed: false,
                        date: "2023-10-05",
                    },
                    outForDelivery: {
                        isConfirmed: false,
                        date: "2023-10-10",
                    },
                    delivered: {
                        isConfirmed: false,
                        date: "2023-10-15",
                    },
                    cancel: {
                        isConfirmed: false,
                        date: "2023-10-20",
                    },
                    refunded: {
                        isConfirmed: false,
                        date: "2023-10-25",
                    }
                },

            }
        ]
    },
]

const Order = () => {
    return (
        <div className="p-4">
            <div className="lg:flex hidden border rounded-full mb-2">
                <Searchbar />
            </div>

            <h2 className="lg:hidden flex font-semibold text-xl py-2">My Orders</h2>

            {Orders.length > 0 ? (
                Orders.map((order, orderIdx) => (
                    <div key={orderIdx} className="mb-6 max-sm:mb-4">
                        {order.products.map((product, prodIdx) => (
                            <div key={prodIdx} className="bg-white md:p-3 mb-4 rounded-lg shadow-md flex gap-0">
                                <div className="max-md:p-3 md:mr-2">
                                    <img
                                        src={product.productId.image}
                                        alt={product.productId.title.shortTitle}
                                        className="w-24 h-24 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="w-full py-1">
                                    <div className="md:hidden flex">
                                        {Object.entries(product.orderStatus)
                                            .filter(([_, details]) => details.isConfirmed)
                                            .map(([status, details]) => (
                                                <div key={status} className="flex items-center justify-between py-1">
                                                    <span className="text-sm text-green-500">
                                                        Confirmed - {details.date}
                                                    </span>
                                                </div>
                                            ))}
                                    </div>
                                    <div className="flex justify-between items-start w-full">
                                        <div>
                                            <p className="md:flex hidden">
                                                <span className="text-gray-600">{product.productId.title.shortTitle}</span> |{" "}
                                                <span className="text-gray-600">
                                                    {product.productId.title.longTitle.slice(0, 50)} ...
                                                </span>
                                            </p>

                                            <p className="flex md:hidden">
                                                <span className="text-gray-600">
                                                    {product.productId.title.shortTitle.slice(0, 70)} ...
                                                </span>
                                            </p>
                                            <p className="text-gray-600">Qty: {product.qty} | Size: {product.size} | Color: {product.color}</p>
                                            <p className="text-gray-600">Total Amount: ₹{product.totalAmount}</p>
                                        </div>
                                        <div className="hidden md:flex">
                                            {Object.entries(product.orderStatus)
                                                .filter(([_, details]) => details.isConfirmed)
                                                .map(([status, details]) => (
                                                    <div key={status} className="flex items-center justify-between py-1">
                                                        <span className="text-sm text-green-500">
                                                            Confirmed - {details.date}
                                                        </span>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-lg italic text-center mt-10">
                    No orders found.
                </p>
            )}
        </div>
    );
};

export default Order;