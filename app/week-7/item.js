import React from "react";

export default function Item(props) {

    return (
        <li className="p-4 border-b-2 border-gray-700 flex justify-between items-start">
            <div className="flex flex-col">
                <p className="text-2xl text-gray-700 font-semibold">{props.name}</p>
                <p className="text-lg text-gray-700 font-semibold">Buy {props.quantity} in {props.category} </p>
            </div>

        </li>
    );
}


