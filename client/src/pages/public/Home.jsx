import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar />
        <div className="h-screen bg-orange-400" />
      </div>
    </>
  );
};

export default Home;
