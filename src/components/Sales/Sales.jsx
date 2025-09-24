import { useSales } from "../../context/SalesContext";
import SaleRecord from "./SaleRecord";

const Sales = () => {
    const sales = useSales();

    return (
        <div
            className="min-h-screen w-full p-4"
            style={{
                background: "linear-gradient(270deg, #FFD54F 0%, #FFB74D 60%, #FFE0B2 100%)",
            }}
        >
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Sales Record</h1>
            {sales.length > 0 ? (
                <div className="grid gap-4">
                    {sales.map((sale, index) => (
                        <SaleRecord key={index} sale={sale} saleId={index} />
                    ))}
                </div>
            ) : (
                <p className="text-gray-700">No sales recorded yet.</p>
            )}
        </div>
    );
};

export default Sales;
