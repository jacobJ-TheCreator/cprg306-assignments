"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    const handleItemSelect = (itemName) => {
        let cleanedName = itemName.includes(",") ? itemName.split(",")[0].trim() : itemName;

        if (!itemName.includes(",")) {
            cleanedName = cleanedName.replace(/[^\p{L}\s]/gu, "").trim();
        }

        setSelectedItemName(cleanedName);
    };

    return (
        <main className="relative min-h-screen bg-purple-200 p-6 flex">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold text-gray-700 mb-6">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
        </main>
    );
}
