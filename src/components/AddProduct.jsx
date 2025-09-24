import { useInventoryDispatch } from "../context/InventoryContext";

export default function AddProduct() {
  const dispatchToInventory = useInventoryDispatch();

  const onAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      productName: e.target.productName.value,
      imageUrl: e.target.imageUrl.value,
      price: parseFloat(e.target.price.value),
      tags: e.target.tags.value.split(",").map((tag) => tag.trim()),
      stock: e.target.stock.value,
    };

    dispatchToInventory({
      type: "NEW_PRODUCT",
      ...newProduct,
    });

    e.target.reset();
    alert("✅ Product added successfully!");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-200">
      <div className="max-w-md mx-auto p-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-xl rounded-2xl mt-6 mb-4">
        <h1 className="font-extrabold text-4xl text-center mb-6 text-white drop-shadow-lg">
          Add New Product
        </h1>
        <form
          onSubmit={onAddProduct}
          className="space-y-5 bg-white/90 p-6 rounded-xl shadow-lg"
        >
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-semibold text-gray-700"
            >
              Product Name
            </label>
            <input
              id="productName"
              type="text"
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Enter product name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-semibold text-gray-700"
            >
              Product Image URL
            </label>
            <input
              id="imageUrl"
              type="text"
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Enter image URL"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-semibold text-gray-700"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              step="0.01"
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Enter price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="stock"
              className="block text-sm font-semibold text-gray-700"
            >
              Stock
            </label>
            <input
              id="stock"
              type="number"
              step="1"
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Enter stock quantity"
              required
            />
          </div>
          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-semibold text-gray-700"
            >
              Tags (comma-separated)
            </label>
            <input
              id="tags"
              type="text"
              className="w-full p-3 border-2 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
              placeholder="Enter tags, separated by commas"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition duration-300 ease-in-out hover:scale-105 hover:from-purple-500 hover:to-red-500 active:scale-95"
            >
              🚀 Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
