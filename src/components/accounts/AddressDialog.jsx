import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogClose } from "../ui/dialog";

const initialAddress = {
  locality: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
};

const AddressDialog = ({ open, onClose, onSubmit, initial = initialAddress }) => {
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full p-6">
        <h2 className="text-xl font-bold mb-4">Add/Edit Address</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input name="locality" placeholder="Locality" value={form.locality} onChange={handleChange} required />
          <Input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
          <Input name="state" placeholder="State" value={form.state} onChange={handleChange} required />
          <Input name="zipcode" placeholder="Zipcode" value={form.zipcode} onChange={handleChange} required />
          <Input name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
          <div className="flex gap-4 mt-6">
            <DialogClose asChild>
              <Button type="button" variant="outline" className="w-1/2" onClick={onClose}>Cancel</Button>
            </DialogClose>
            <Button type="submit" className="w-1/2 bg-primary-bg text-white">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddressDialog;
