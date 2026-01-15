import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const sucursales = [
    {
      sucursal: "Luis Guillon",
      direccion: "Av. Luciano Valette 1952",
    },
    {
      sucursal: "Cañuelas",
      direccion: "Ruta 205 KM 66,5",
    },
  ];
  const [sucursalElegida, setSucursalElegida] = useState(sucursales[0]);

  return (
    <AppContext.Provider
      value={{
        sucursales,
        sucursalElegida,
        setSucursalElegida,
        isAuth,
        setIsAuth,
        showSidebar,
        setShowSidebar,
        searchInput,
        setSearchInput,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
