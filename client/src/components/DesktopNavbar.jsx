import React from "react";
import { useAppContext } from "../context/AppContext";
import { Calculator, Home, Menu, Star } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarItems = ({ icon, title, path }) => {
  const { navigate } = useAppContext();
  const Icon = icon;
  return (
    <Link
      to={path}
      className="flex w-fit items-center justify-center gap-2 hover:text-red-500 select-none cursor-pointer"
    >
      <Icon className="w-7 shrink-0" />
      <p className="w-fit text-lg">{title}</p>
    </Link>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="hidden md:flex gap-8 items-center sticky top-16 bg-neutral-50/90 border-y border-y-red-600 px-8 py-3">
      <NavbarItems icon={Home} title={"Inicio"} path={"/"} />
      <NavbarItems icon={Menu} title={"Categorías"} path={"/categorias"} />
      <NavbarItems
        icon={Calculator}
        title={"Presupuesto"}
        path={"/presupuesto"}
      />
      <NavbarItems icon={Star} title={"Puntos"} path={"/puntos"} />
    </div>
  );
};

export default DesktopNavbar;
