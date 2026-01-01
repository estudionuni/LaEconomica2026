import React from "react";
import Footer from "../../components/Footer";
import SearchBar from "../../components/SearchBar";

const AllProducts = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <SearchBar />
        <div className="h-screen bg-orange-900" />
      </div>
    </>
  );
};

export default AllProducts;
