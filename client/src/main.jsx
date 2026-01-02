import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/LaEconomica2026">
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
