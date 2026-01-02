import { Route, Routes } from "react-router-dom";
import MainPublicLayout from "./layouts/mainPublicLayout";
import Home from "./pages/public/Home";
import AllProducts from "./pages/public/AllProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPublicLayout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<AllProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
