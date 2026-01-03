import React from "react";
import { categoriasList } from "../assets/assets.js";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <>
      <section className="flex w-full h-fit gap-2 overflow-x-auto px-2 py-4">
        {categoriasList.map((item) => {
          const Icon = item.imagen;

          return (
            <Link
              key={item.path}
              to={`/categoria/${item.path}`}
              className="flex flex-col size-fit p-2 rounded-md border border-neutral-500"
            >
              <Icon className="size-10 bg-red-600 text-white p-2 mx-auto rounded-full shrink-0 stroke-[1.5px]" />
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
