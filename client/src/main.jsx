import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </HashRouter>
);
