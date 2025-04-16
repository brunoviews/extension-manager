import React, { useState } from "react";
import ExtensionCard from "./ExtensionCard";
import Mockdata from "../data/Mockdata";

function ListExtensions() {
  const [extensions, setExtensions] = useState(Mockdata); // Estado local para las extensiones
  const [filter, setFilter] = useState("All"); // Nuevo estado para el filtro



  function toggleExtensionState(id) {
    setExtensions(function (prevExtensions) {
      return prevExtensions.map(function (ext) {
        if (ext.id === id) {
          return { ...ext, isActive: !ext.isActive };
        }
        return ext;
      });
    });
  }
  
  function removeExtension(id) {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.id !== id)
    );
  }

  const getFilteredExtensions = () => {
    if (filter === "All") {
      return extensions;
    } else if (filter === "Active") {
      return extensions.filter((ext) => ext.isActive === true);
    } else if (filter === "Inactive") {
      return extensions.filter((ext) => ext.isActive === false);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
    <div className="flex flex-row justify-between items-center m-auto mt-10 max-w-6xl">
        <h1 className="text-2xl font-bold">Extensions List</h1>
        <div className="flex gap-2">
          <button
            className="bg-white/65 border border-zinc-300 text-black font-bold rounded-2xl h-7 text-xs px-2 hover:bg-red-600 hover:text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className="bg-white/65 border border-zinc-300 text-black font-bold rounded-2xl h-7 text-xs px-2 hover:bg-red-600 hover:text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleFilterChange("Active")}
          >
            Active
          </button>
          <button
            className="bg-white/65 border border-zinc-300 text-black font-bold rounded-2xl h-7 text-xs px-2 hover:bg-red-600 hover:text-white cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
            onClick={() => handleFilterChange("Inactive")}
          >
            Inactive
          </button>
        </div>
      </div>
    <div className="flex flex-col items-center min-h-screen"> 
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl"> 
        {getFilteredExtensions().map((data, index) => (
          <div key={index} className="flex justify-center">
            <ExtensionCard
              data={data}
              state={data.isActive}
              onToggleState={() => toggleExtensionState(data.id)}
              onRemove={() => removeExtension(data.id)}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default ListExtensions;
