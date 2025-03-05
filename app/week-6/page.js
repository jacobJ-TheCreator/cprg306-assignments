import React from "react";
import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="min-h-screen bg-purple-200 p-6">

            <h1 className="text-3xl font-bold text-gray-700 mb-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}


