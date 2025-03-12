"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <main className="max-w-md bg-sky-300 shadow-md rounded-lg p-4">
            <div className="flex justify-between mb-4">
                <button
                    className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                    onClick={() => setSortBy("name")}
                >
                    Name
                </button>
                <button
                    className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                    onClick={() => setSortBy("category")}
                >
                    Category
                </button>
            </div>

            <ul>
                {sortedItems.map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                ))}
            </ul>
        </main>
    );
}
