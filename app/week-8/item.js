import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li
            className="p-4 border-b-2 border-gray-700 flex justify-between items-start cursor-pointer hover:bg-gray-200 rounded"
            onClick={() => onSelect(name)}
        >
            <div className="flex flex-col">
                <p className="text-2xl text-gray-700 font-semibold">{name}</p>
                <p className="text-lg text-gray-700 font-semibold">Buy {quantity} in {category}</p>
            </div>
        </li>
    );
}
