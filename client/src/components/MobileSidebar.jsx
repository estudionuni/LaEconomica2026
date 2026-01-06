import React from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const MobileSidebar = () => {
  const { showSidebar, setShowSidebar } = useAppContext();
  return (
    <>
      <div
        className="fixed inset-0 bg-red-600/10 md:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
        hidden={!showSidebar}
      />
      <section
        className={`fixed top-0 left-0 h-full w-4/5 bg-red-600 z-50 transform transition-transform duration-300 border-r border-red-500 shadow-md shadow-red-600/50 p-4 md:hidden flex flex-col overflow-y-auto
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full" // ❗ funciona en todos los tamaños, incluso desktop
          }
        `}
      >
        <img src={assets.logo} alt="logo" className="h-12 w-fit" />
        <div className="w-full gap-2 items-center select-none cursor-pointer bg-red-500 rounded-md py-2 px-4 mt-auto">
          <p className="text-white size-6 w-fit mx-auto whitespace-nowrap">
            Registrate/Ingresá
          </p>
        </div>
      </section>
    </>
  );
};

export default MobileSidebar;
