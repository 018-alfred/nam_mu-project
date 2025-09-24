const SaleRecord = ({ sale, saleId }) => {
    return (
        <div
            className="border border-gray-300 shadow-sm rounded-2xl p-5"
            style={{
                background: "linear-gradient(90deg, #FFA726 0%, #FF9800 50%, #FFD54F 100%)"
            }}
        >
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold text-white">Sale #{saleId + 1}</h2>
                <span className="text-sm text-yellow-50">
                    {new Date(sale.datetime).toLocaleString()}
                </span>
            </div>
            <p className="mb-2 text-white">
                <strong>Total Sale Value:</strong> ₹{sale.saleValue.toFixed(2)}
            </p>
            <p className="mb-2 text-white">
                <strong>Cart Details:</strong>
            </p>
            <ul className="list-disc list-inside pl-4 text-white font-bold">
                {sale.products.map((product) => (
                    <li key={product.productName}>
                        {product.productName} ({product.quantity}) - ₹
                        {(product.price * product.quantity).toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SaleRecord;
