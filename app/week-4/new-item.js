"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
    };

    const decrement = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
    };

    return (
        <div className="p-4 bg-gray-100 rounded shadow-md w-fit mx-auto">

            <div className="flex space-x-2">
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="px-4 py-2 bg-gray-400 text-white rounded disabled:bg-red-300"
                >
                    -
                </button>
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-red-300"
                >
                    +
                </button>

                <span className="text-lg font-semibold text-black ml-4">{quantity}</span>
            </div>
        </div>
    );
}