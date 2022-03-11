import { useState } from "react";

export function TextInput(props) {
    return (
        <div className={`${props.width} w-full px-3 p-3`}>
            <input
                className="font-Raleway appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={props.id} type={props.type} placeholder={props.placeholder}
            />

            <div
                className="inline-block invisible absolute py-1 px-3 text-xs font-bold text-center font-Raleway text-white bg-tooltip-color rounded-lg shadow-sm -mt-18">
                {props.tooltip}
            </div>
        </div>
    )
}
