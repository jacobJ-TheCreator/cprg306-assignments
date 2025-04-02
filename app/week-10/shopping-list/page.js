"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        if (!user) {
            router.push("/week-9");
        } else {
            const loadItems = async () => {
                const itemsFromFirestore = await getItems(user.uid);
                setItems(itemsFromFirestore);
            };
            loadItems();
        }
    }, [user, router]);

    const handleAddItem = async (newItem) => {
        const id = await addItem(user.uid, newItem);
        setItems((prevItems) => [...prevItems, { ...newItem, id }]);
    };

    const handleItemSelect = (itemName) => {
        let cleanedName = itemName.includes(",")
            ? itemName.split(",")[0].trim()
            : itemName.replace(/[^\p{L}\s]/gu, "").trim();
        setSelectedItemName(cleanedName);
    };

    if (!user) return null;

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
