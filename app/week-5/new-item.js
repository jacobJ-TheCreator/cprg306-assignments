//2025-02-25
"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const item = { name, quantity, category };

        console.log("Item submitted:", item);

        alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-md w-fit mx-auto">
            <div className="flex space-x-2">
                <button
                    type="button"
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="px-4 py-2 bg-gray-400 text-white rounded disabled:bg-red-300"
                >

                </button>
                <button
                    type="button"
                    onClick={increment}
                    disabled={quantity === 20}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-red-300"
                >

                </button>

                <span className="text-lg font-semibold text-black ml-4">{quantity}</span>
            </div>

            <div className="mt-4">
                <label className="block text-lg text-gray-600 font-semibold mb-2">Item Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter item name"
                    className="p-2 border border-gray-600 text-gray-600 rounded w-full"
                    required
                />
            </div>

            <div className="mt-4">
                <label className="block text-lg text-gray-600 font-semibold mb-2">Select Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border border-gray-600 rounded w-full text-gray-600"
                    required
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {name && <p className="mt-2 text-lg text-gray-600 font-semibold">Item: {name}</p>}
            {category && <p className="mt-1 text-lg text-gray-600">Category: {category}</p>}

            <button
                type="submit"
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Add Item
            </button>
        </form>
    );
}
