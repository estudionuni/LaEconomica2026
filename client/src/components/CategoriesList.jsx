import React from "react";
import { categoriasList } from "../assets/assets.js";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  return (
    <>
      <section className="flex w-full sm:w-1/2 h-fit gap-2">
        {categoriasList.map((categoria, imagen, path) => {
          const Icon = imagen;
          return (
            <>
              <Link
                to={`/categoria/${path}`}
                key={path}
                className="flex flex-col size-fit"
              >
                <Icon classname="size-5 bg-red-500 text-white p-2 mx-auto" />
                <p className="w-fit mx-auto">{categoria}</p>
              </Link>
            </>
          );
        })}
      </section>
    </>
  );
};

export default CategoriesList;
