import React from "react";
import { categoriasList } from "../assets/assets.js";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <>
      <section className="flex w-full sm:w-1/2 h-fit gap-2">
        {categoriasList.map((item) => {
          const Icon = item.imagen;

          return (
            <Link
              key={item.path}
              to={`/categoria/${item.path}`}
              className="flex flex-col size-fit p-2 rounded-md border border-neutral-500"
            >
              <Icon className="size-10 bg-red-500 text-white p-2 mx-auto" />
              <p className="w-fit mx-auto text-center">{item.categoria}</p>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default CategoriesList;
