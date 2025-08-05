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

const Addressess = ({ address = addressData }) => {
    return (
        <div className="p-4 w-full">
            <h2 className="text-2xl font-semibold mb-4 text-primary-text">Saved Addresses</h2>

            {address.length > 0 ? (
                address.map((addr, index) => (
                    <div key={index} className="bg-white p-4 mb-4 rounded-lg">
                        <h3 className="text-xl font-semibold">
                            {addr.locality}, {addr.city}
                        </h3>
                        <p>{addr.state}, {addr.zipcode}</p>
                        <p>{addr.country}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500 text-lg italic">
                    No addresses saved yet.
                </p>
            )}
        </div>
    );
};

export default Addressess;
