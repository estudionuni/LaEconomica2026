import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { categoriasList } from "../assets/assets.js";
import { Calculator, ChevronDown, Menu, Star, Store } from "lucide-react";
import { Link } from "react-router-dom";

const SidebarItems = ({ icon, title, path }) => {
  const Icon = icon;
  return (
    <Link
      to={path}
      className="flex w-fit items-center gap-2 select-none text-white"
    >
      <Icon className="w-7 shrink-0" />
      <p className="w-fit text-lg">{title}</p>
    </Link>
  );
};

const MobileSidebar = () => {
  const { showSidebar, setShowSidebar } = useAppContext();
  const [showCategories, setShowCategories] = useState(false);
  const [rotated, setRotated] = useState(false);
  return (
    <>
      <div
        className="fixed inset-0 bg-red-600/10 md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
        hidden={!showSidebar}
      />
      <section
        className={`fixed top-0 left-0 h-full w-4/5 bg-red-600 z-50 transform transition-transform duration-300 border-r border-red-500 shadow-md shadow-red-600/50 p-4 md:hidden flex flex-col overflow-y-auto gap-4 overscroll-none select-none
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full" // ❗ funciona en todos los tamaños, incluso desktop
          }
        `}
      >
        <img src={assets.logo} alt="logo" className="h-12 w-fit" />

        <div className="flex flex-col gap-2">
          <div
            className="flex relative items-center gap-2 text-white"
            onClick={() => {
              setShowCategories(!showCategories);
              setRotated(!rotated);
            }}
          >
            <Menu className="w-7 shrink-0" />
            <p className="text-lg w-fit">Categorías</p>
            <ChevronDown
              className={`w-7 shrink-0 ml-auto transition-transform duration-300 ease-in-out ${
                rotated ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          <div className="flex flex-col p-2 w-full" hidden={!showCategories}>
            {categoriasList.map((item) => {
              const Icon = item.imagen;
              return (
                <Link
                  key={item.path}
                  to={`/categoria/${item.path}`}
                  className="flex gap-2 text-white py-1 pl-2 items-center"
                >
                  <Icon className="size-6 shrink-0 stroke-[1px]" />
                  <p className="w-fit text-lg whitespace-nowrap">
                    {item.categoria}
                  </p>
                </Link>
              );
            })}
          </div>
          <SidebarItems
            icon={Calculator}
            title={"Presupuesto"}
            path={"/presupuesto"}
          />
          <SidebarItems icon={Star} title={"Puntos"} path={"/puntos"} />
          <SidebarItems
            icon={Store}
            title={"Nuestas Sucursales"}
            path={"/sucursales"}
          />
        </div>
        <div className="flex flex-col mt-auto gap-2">
          <div className="h-px w-full bg-white" />
          <div className="w-full gap-2 items-center select-none cursor-pointer bg-red-500 rounded-md py-2 px-4">
            <p className="text-white size-6 w-fit mx-auto whitespace-nowrap">
              Registrate/Ingresá
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileSidebar;
