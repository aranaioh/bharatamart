import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";


const Cardforcart = ({ product, onRemove }) => {

    return (
        <div className="flex flex-col md:flex-row gap-4 border-b last:border-b-0 py-4">
            <img src={product.image} alt={product.title} className="w-24 h-28 object-cover rounded" />
            <div className="flex-1 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{product.title}</h3>
                </div>
                <div className="text-sm text-gray-600">Size: S</div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold">₹{product.discountPrice || product.price}</span>
                    <span className="text-gray-400 line-through">₹{product.price}</span>
                    <span className="text-green-600 font-semibold text-sm">{product.discount || 0}% Off</span>
                </div>
                <div className="flex max-md:w-full w-[250px]  justify-between items-center mt-2">
                    <div className="flex w-fit items-center gap-2 mt-2 border border-gray-400 rounded-lg">
                        <button className="py-3 border-r px-2" disabled><RiSubtractLine /></button>
                        <span className="px-2">{product.quantity}</span>
                        <button className="py-3 border-l px-2"><IoMdAdd /></button>
                    </div>
                    <button className="text-primary-bg font-semibold text-sm">REMOVE</button>
                </div>
                <span className="text-xs text-gray-500">Delivery by Sat Aug 9</span>

            </div>
        </div>
    )
}

export default Cardforcart