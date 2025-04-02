"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        if (!user) {
            router.push("/week-10");
            return;
        }

        const loadItems = async () => {
            const itemsData = await getItems(user.uid);
            setItems(itemsData);
        };

        loadItems();
    }, [user, router]);

    const handleAddItem = async (NewItem) => {
        const id = await addItem(user.uid, NewItem);
        const itemWithId = { ...NewItem, id };
        setItems((prev) => [...prev, itemWithId]);
    };

    const handleItemSelect = (itemName) => {
        let cleaned = itemName.includes(",") ? itemName.split(",")[0].trim() : itemName;
        if (!itemName.includes(",")) {
            cleaned = cleaned.replace(/[^\p{L}\s]/gu, "").trim();
        }
        setSelectedItemName(cleaned);
    };

    if (!user) return null;

    return (
        <main className="min-h-screen bg-purple-200 p-6 flex">
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
