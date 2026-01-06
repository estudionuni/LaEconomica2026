import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  return (
    <AppContext.Provider
      value={{
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
