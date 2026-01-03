import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle } from "lucide-react";
import { assets } from "../assets/assets";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row sticky top-0 inset-0 h-fit px-4 py-2 sm:gap-4 bg-red-600">
        <div className="flex gap-2 px-2 sm:px-0 items-center justify-between pb-2 sm:pb-0">
          <Menu className="size-7 shrink-0 stroke-2 text-white sm:hidden" />
          <Link to="/">
            <img
              src={assets.logo}
              alt="La Económica"
              className="flex h-12 object-contain"
            />
          </Link>
          <ShoppingCart className="size-7 shrink-0 stroke-[1.5px] text-white sm:hidden" />
        </div>
        <section className="flex gap-4 items-center w-full">
          <Link
            to="/productos"
            className="flex w-full px-4 py-2 rounded-sm bg-white text-neutral-900"
          >
            Buscar Productos...
          </Link>
          <div className="w-fit gap-2 hidden sm:flex items-center select-none cursor-pointer bg-red-500 rounded-md py-2 px-4">
            <p className="text-white size-6 w-fit whitespace-nowrap">
              Registrate/Ingresá
            </p>
          </div>
          <ShoppingCart className="size-7 shrink-0 stroke-[1.5px] text-white hidden sm:block" />
        </section>
      </div>
    </>
  );
};

export default Navbar;
