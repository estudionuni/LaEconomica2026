import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileSidebar from "../components/MobileSidebar";

const MainPublicLayout = () => {
  return (
    <>
      <main className="size-screen">
        <Outlet />
        <MobileSidebar />
        <Footer />
      </main>
    </>
  );
};

export default MainPublicLayout;
