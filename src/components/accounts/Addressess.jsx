const addressData = [
    {
        locality: "Sector 17",
        city: "Chandigarh",
        state: "Chandigarh",
        zipcode: 852110,
        country: "India",
    },
    {
        locality: "Connaught Place",
        city: "New Delhi",
        state: "Delhi",
        zipcode: 110001,
        country: "India",
    },
    {
        locality: "Bandra",
        city: "Mumbai",
        state: "Maharashtra",
        zipcode: 400050,
        country: "India",
    },
    {
        locality: "Jubilee Hills",
        city: "Hyderabad",
        state: "Telangana",
        zipcode: 500033,
        country: "India",
    },
];


import { useState } from "react";
import AddressDialog from "./AddressDialog";

const Addressess = ({ address = addressData }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editAddress, setEditAddress] = useState(null);

    const handleAddClick = () => {
        setEditAddress(null);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    const handleDialogSubmit = (form) => {
        // TODO: Call API to add address
        // Example: await api.addAddress(form)
        setDialogOpen(false);
    };

    return (
        <div className="p-4 w-full">
            <AddressDialog open={dialogOpen} onClose={handleDialogClose} onSubmit={handleDialogSubmit} initial={editAddress || undefined} />
            {address.length > 0 && (
                <h2 className="text-2xl font-semibold mb-4 text-primary-text">Saved Addresses</h2>
            )}

            {address.length > 0 ? (
                <>
                    {
                        address.map((addr, index) => (
                            <div key={index} className="bg-white p-4 mb-4 rounded-lg">
                                <h3 className="text-xl font-semibold">
                                    {addr.locality}, {addr.city}
                                </h3>
                                <p>{addr.state}, {addr.zipcode}</p>
                                <p>{addr.country}</p>
                            </div>
                        ))
                    }

                    <div className="w-full flex justify-center">
                        <button className="bg-primary-bg py-2 mt-2 text-white font-semibold px-8 rounded-md" onClick={handleAddClick}>
                            Add New Address
                        </button>
                    </div>
                </>

            ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-white rounded-lg shadow-md">
                    <p className="text-gray-500 text-lg italic">
                        No addresses saved yet.
                    </p>

                    <button className="bg-primary-bg py-2 mt-2 text-white font-semibold px-8 rounded-md" onClick={handleAddClick}>Add Address</button>
                </div>
            )}
        </div>
    );
};

export default Addressess;
