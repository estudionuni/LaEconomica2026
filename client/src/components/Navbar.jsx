import React from "react";
import { Link } from "react-router-dom";
import { CircleUser } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row sticky top-0 inset-0 h-fit px-4 py-2 sm:gap-4 bg-red-600">
        <Link to="/" className="place-self-center">
          <img
            src={assets.logo}
            alt="La Económica"
            className="flex h-12 object-contain"
          />
        </Link>
        <section className="flex gap-4 items-center w-full">
          <Link
            to="/productos"
            className="flex w-full px-4 py-2 rounded-sm bg-white text-neutral-900"
          >
            Buscar Productos...
          </Link>
          <div className="w-fit gap-2 hidden sm:flex items-center">
            <CircleUser className="text-white stroke-[1.5px] shrink-0 size-7" />
            <p className="text-white size-6 w-fit">Registrate/Ingresá</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
