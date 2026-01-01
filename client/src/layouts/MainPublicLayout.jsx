import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainPublicLayout = () => {
  return (
    <>
      <main className="size-screen">
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default MainPublicLayout;
