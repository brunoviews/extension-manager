import React from "react";
import Switch from "@mui/material/Switch";

function ExtensionCard({ data, onToggleState, onRemove }) {
  return (
    <div
      className={`flex flex-col gap-1 justify-center shadow-md rounded-xl p-8 m-4 w-full max-w-lg h-auto transition-shadow duration-300 ease-in-out bg-white text-black dark:bg-gray-800 dark:text-white`}
    >
      <div className="flex gap-1">
        <img src={data.logo} alt={data.name} className="w-12 h-auto mb-4" />
        <div className="flex flex-col justify-between ml-4">
          <h2 className="text-sm font-bold mb-2">{data.name}</h2>
          <p className="text-gray-700 text-sm text-pretty dark:text-white ">
            {data.description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          className="border-1 border-zinc-300 text-black dark:text-white font-bold rounded-2xl h-7 text-xs pl-2 pr-2 hover:bg-red-600 hover:text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={() => onRemove(data.id)}
        >
          Remove
        </button>
        <div>
          <Switch
            checked={data.isActive}
            onChange={() => onToggleState(data.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default ExtensionCard;
