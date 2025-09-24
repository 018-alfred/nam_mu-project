import { useState } from "react";
import { useInventoryDispatch } from "../../context/InventoryContext";

const Product = ({ product, alertValue }) => {
  const [addStock, setAddStock] = useState(0);
  const inventoryDispatch = useInventoryDispatch();

  const handleAddStockChange = (e) => {
    const value = e.target.value;
    setAddStock(value ? parseInt(value, 10) : 0);
  };

  const handleUpdateStock = () => {
    if (addStock > 0) {
      inventoryDispatch({
        type: "STOCK_ADDED",
        productName: product.productName,
        stock: addStock,
      });
      setAddStock(0);
    }
  };

  return (
    <div
      className={`px-3 py-2 rounded text-center flex flex-col items-center border-4 ${
        product.stock < alertValue ? "border-red-800 bg-red-100" : "border-gray-800"
      }`}
    >
      <h1 className="font-bold text-xl">{product.productName}</h1>
      <div className="w-[250px] h-[250px] overflow-hidden border border-gray-800 rounded mt-2">
        <img
          src={product.imageUrl}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-lg mt-2">Price: ₹ {product.price.toFixed(2)}</p>
      <div>
        <p>Stock Available: {product.stock}</p>
      </div>
      <div className="mt-2">
        Add Stock:{" "}
        <input
          onChange={handleAddStockChange}
          className="border border-gray-800 rounded p-1"
          value={addStock}
          type="number"
          name="new-stock-qty"
          id="new-stock-qty"
          min={0}
        />
      </div>
      <div>
        <button
          onClick={handleUpdateStock}
          className="bg-green-500 hover:bg-green-600 rounded p-1 text-white mt-2"
        >
          Update Stock
        </button>
      </div>
    </div>
  );
};

export default Product;
