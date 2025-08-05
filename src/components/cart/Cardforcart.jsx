const Cardforcart = ({ product, onRemove }) => {

    return (
        <div className="border-4 border-black bg-white rounded-lg p-3">
            <div className="flex gap-2">
                <div className="w-40">
                    <img src={product.image} alt={product.title} className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                </div>
            </div>
        </div>
    )
}

export default Cardforcart