import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const profileInfoData = {
    name: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    phone: 9876543210,
    country_code: 91,
    address: [
        {
            locality: "Sector 62, Phase 2, Noida, Uttar Pradesh",
            city: "Noida",
            state: "Uttar Pradesh",
            country: "India",
            zipcode: 201301,
            isActive: true,
        },
    ],
    userType: 1,
    languagePreference: "en",
    avatar: "/profile.jpg",
};

const Profile = () => {
    const [profileInfo, setProfileInfo] = useState(profileInfoData);

    // Form state for dialog
    const [editData, setEditData] = useState(profileInfo);

    const handleSave = () => {
        setProfileInfo(editData);
    };

    return (
        <div className="p-5 w-full flex justify-center">
            <div className="rounded-lg bg-white w-full p-5 max-sm:p-2">
                {/* Profile Info */}
                <div className="w-full flex gap-5 max-sm:gap-2 items-center">
                    <div className="mb-4 h-28 w-28 rounded-md overflow-hidden">
                        <Avatar className="h-28 w-28">
                            <AvatarImage src={profileInfo?.avatar || ""} alt="profile_avatar" />
                            <AvatarFallback>{profileInfo?.name?.[0] || "U"}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="rounded-lg flex-1">
                        <h2 className="text-2xl text-primary-bg font-semibold">
                            {profileInfo?.name || "Unknown User"}
                        </h2>
                        <p className="text-gray-600">
                            Email: {profileInfo?.email || <span className="italic text-gray-400">No email provided</span>}
                        </p>
                        <p className="text-gray-600">
                            Phone:{" "}
                            {profileInfo?.phone
                                ? `+${profileInfo?.country_code || ""} ${profileInfo?.phone}`
                                : <span className="italic text-gray-400">No phone number</span>}
                        </p>
                    </div>

                    {/* Edit Profile Dialog */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-primary-bg text-white">Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-lg">
                            <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                            </DialogHeader>

                            {/* Form Fields */}
                            <div className="flex flex-col gap-4 mt-2">
                                <div>
                                    <Label>Name</Label>
                                    <Input
                                        value={editData?.name || ""}
                                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label>Email</Label>
                                    <Input
                                        type="email"
                                        value={editData?.email || ""}
                                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label>Phone</Label>
                                    <Input
                                        type="tel"
                                        value={editData?.phone || ""}
                                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label>Avatar URL</Label>
                                    <Input
                                        type="text"
                                        value={editData?.avatar || ""}
                                        onChange={(e) => setEditData({ ...editData, avatar: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label>Current Address</Label>
                                    {editData?.address?.length > 0 ? (
                                        <textarea
                                            className="border rounded-md w-full p-2 text-sm"
                                            rows={3}
                                            value={`${editData.address[0].locality}, ${editData.address[0].city}, ${editData.address[0].state}, ${editData.address[0].zipcode}, ${editData.address[0].country}`}
                                            onChange={(e) =>
                                                setEditData({
                                                    ...editData,
                                                    address: [
                                                        { ...editData.address[0], locality: e.target.value }, // Simplified for example
                                                    ],
                                                })
                                            }
                                        />
                                    ) : (
                                        <p className="italic text-gray-400">No address added</p>
                                    )}
                                </div>
                            </div>

                            {/* Dialog Footer */}
                            <DialogFooter className="mt-4">
                                <Button variant="outline">Cancel</Button>
                                <Button className="bg-primary-bg text-white" onClick={handleSave}>
                                    Save Changes
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Address Section */}
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-primary-bg mb-4">Current Address :</h2>
                    {profileInfo?.address && profileInfo.address.length > 0 ? (
                        <RadioGroup value="active" className="flex flex-col gap-2">
                            {profileInfo.address
                                .filter((addr) => addr.isActive)
                                .map((addr, index) => (
                                    <div key={index} className="mb-4 rounded-lg flex items-center gap-4">
                                        <RadioGroupItem value="active" checked readOnly className="border-primary-bg" />
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {addr.locality}, {addr.city}
                                            </h3>
                                            <p>{addr.state}, {addr.zipcode}</p>
                                            <p>{addr.country}</p>
                                        </div>
                                    </div>
                                ))}
                        </RadioGroup>
                    ) : (
                        <p className="italic text-gray-400">No address available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
