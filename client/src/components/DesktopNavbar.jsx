import React, { useState } from "react";
import { categoriasList } from "../assets/assets.js";
import { Calculator, ChevronDown, Menu, Star, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext.jsx";

const NavbarItems = ({ icon, title, path }) => {
  const Icon = icon;
  return (
    <Link
      to={path}
      className="hidden sm:flex w-fit items-center justify-center gap-2 hover:text-red-500 select-none cursor-pointer"
    >
      <Icon className="size-4 lg:size-6 shrink-0 stroke-[1.5px]" />
      <p className="w-fit text-base lg:text-lg">{title}</p>
    </Link>
  );
};

const DesktopNavbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showSucursales, setShowSucursales] = useState(false);
  const { sucursales, sucursalElegida, setSucursalElegida } = useAppContext();
  return (
    <div className="flex gap-5 lg:gap-8 items-center sticky top-30 lg:top-16 bg-neutral-50/90 px-4 lg:px-8 py-3">
      {/*Boton de categorias */}
      <div
        className="hidden sm:flex relative items-center gap-2 hover:text-red-500 cursor-pointer"
        onClick={() => setShowCategories(!showCategories)}
      >
        <Menu className="size-4 lg:size-6 shrink-0" />
        <p className="text-base lg:text-lg w-fit">Categorías</p>
      </div>
      <div
        className="fixed inset-0"
        onClick={() => setShowCategories(false)}
        hidden={!showCategories}
      />
      <div
        className="grid grid-cols-3 absolute top-13.5 left-8 p-2 w-fit bg-white border border-red-600 rounded"
        hidden={!showCategories}
      >
        {categoriasList.map((item) => {
          const Icon = item.imagen;
          return (
            <Link
              key={item.path}
              to={`/categoria/${item.path}`}
              className="flex gap-2 hover:bg-red-100 py-1 pl-2 pr-3 rounded"
            >
              <Icon className="size-7 text-red-600 shrink-0 stroke-[1px]" />
              <p className="w-fit whitespace-nowrap">{item.categoria}</p>
            </Link>
          );
        })}
      </div>
      <NavbarItems
        icon={Calculator}
        title={"Presupuesto"}
        path={"/presupuesto"}
      />
      <NavbarItems icon={Star} title={"Puntos"} path={"/puntos"} />
      <div
        onClick={() => {
          setShowSucursales(!showSucursales);
          window.navigator.vibrate(50);
        }}
        className="flex w-fit ml-auto items-center justify-center gap-1 hover:text-red-600 cursor-pointer select-none"
      >
        <Store className="hidden lg:block lg:size-6 shrink-0 stroke-[1.5px] mr-1" />
        <p className="text-base lg:text-lg">
          Sucursal: {sucursalElegida.sucursal}
        </p>
        <ChevronDown className="size-4 shrink-0 stroke-[1.5px]" />
      </div>
      <div
        className="fixed inset-0"
        onClick={() => {
          setShowSucursales(false);
          window.navigator.vibrate(50);
        }}
        hidden={!showSucursales}
      />
      <div
        hidden={!showSucursales}
        className="flex flex-col absolute top-13.5 right-8 w-fit p-1 bg-white border border-red-600 rounded"
      >
        {sucursales.map((item) => (
          <p
            onClick={() => {
              setSucursalElegida(item);
              setShowSucursales(false);
              window.navigator.vibrate(50);
            }}
            className="py-1 px-3 hover:bg-red-50 rounded select-none cursor-pointer"
          >
            {item.sucursal} ({item.direccion})
          </p>
        ))}
      </div>
    </div>
  );
};

export default DesktopNavbar;
