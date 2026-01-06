import React from "react";
import { categoriasList } from "../assets/assets.js";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <>
      <section className="flex w-full h-fit gap-2 overflow-x-auto px-2 pt-4 pb-2 scrollbar-none">
        {categoriasList.map((item) => {
          const Icon = item.imagen;

          return (
            <Link
              key={item.path}
              to={`/categoria/${item.path}`}
              className="flex flex-col size-fit p-2 rounded-md border border-red-400 bg-red-50 select-none"
            >
              <Icon className="size-13 bg-red-600 text-white p-2 mx-auto rounded-full shrink-0 stroke-[1.5px]" />
              <p className="w-fit mx-auto text-center whitespace-nowrap">
                {item.categoria}
              </p>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default CategoriesList;
