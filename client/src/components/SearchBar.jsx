import React from "react";
import { Link } from "react-router-dom";
import { CircleUser, Menu, ShoppingCart, X } from "lucide-react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const SearchBar = () => {
  const { searchInput, setSearchInput, setShowSidebar } = useAppContext();
  return (
    <>
      <div className="flex flex-col md:flex-row sticky top-0 inset-0 h-fit px-4 py-2 md:gap-4 bg-red-600 shadow-sm shadow-red-600/40">
        <div className="flex gap-2 px-1 md:px-0 items-center justify-between pb-2 sm:pb-0">
          <Menu
            className="size-10 p-2 rounded-lg shrink-0 stroke-2 text-white block md:hidden active:bg-red-500"
            onClick={() => setShowSidebar(true)}
          />
          <Link to="/">
            <img
              src={assets.logo}
              alt="La Económica"
              className="flex h-13 w-fit object-scale-down pointer-events-none"
            />
          </Link>
          <ShoppingCart className="size-10 p-2 rounded-lg active:bg-red-500 shrink-0 stroke-[1.5px] text-white md:hidden" />
        </div>
        <section className="flex gap-4 items-center w-full">
          <div className="flex w-full px-2 py-2 rounded-sm bg-white gap-4">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Buscar Productos..."
              className="w-full px-2 outline-none placeholder:text-neutral-600 text-neutral-900"
            />
            <X
              className="size-7 p-1.5 shrink-0 rounded-full bg-red-400 text-white cursor-pointer"
              onClick={() => setSearchInput("")}
            />
          </div>
          <div className="w-fit gap-2 hidden md:flex items-center select-none cursor-pointer bg-red-500 rounded-md py-2 px-4">
            <p className="text-white size-6 w-fit whitespace-nowrap">
              Registrate/Ingresá
            </p>
          </div>
          <ShoppingCart className="size-10 p-2 rounded-lg bg-red-500 cursor-pointer shrink-0 stroke-[1.5px] text-white hidden md:block" />
        </section>
      </div>
    </>
  );
};

export default SearchBar;
