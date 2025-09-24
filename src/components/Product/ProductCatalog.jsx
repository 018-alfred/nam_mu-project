import { useState } from "react";
import ProductList from "./ProductList";
import { useInventory } from "../../context/InventoryContext";

export default function ProductCatalog() {
    const inventory = useInventory();
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = inventory.filter(
        (item) =>
            item.stock > 0 &&
            item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center p-4 bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-200"
            style={{ fontWeight: 'bold' }}
        >
            <h1 className="mx-2 mt-4 text-2xl text-white">Product Catalog</h1>
            <div className="m-4 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-gray-300 hover:border-gray-400 p-2 rounded w-full font-bold"
                />
            </div>
            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p className="m-2 text-white font-bold">No products found.</p>
            )}
        </div>
    );
}
