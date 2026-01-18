import React, { useState } from "react";
import { assets, productosList } from "../assets/assets";
import { Heart, ShoppingCart } from "lucide-react";

const PriceContainer = ({ title, price }) => {
  return (
    <div className="flex flex-col rounded overflow-hidden border border-red-100">
      <p className="text-red-600 text-sm sm:text-base font-bold bg-yellow-400 w-full py-0.5">
        {title}
      </p>
      <h2 className="flex text-red-700 bg-yellow-300 font-medium lg:text-lg py-1 items-center justify-center gap-0.5">
        <span className="text-sm">$</span> {price}
      </h2>
    </div>
  );
};

const ProductCard = ({
  imagen,
  nombre,
  marca,
  precio,
  precioBulto,
  unidadesPorBulto,
  index,
}) => {
  const [fav, setFav] = useState(false);
  return (
    <>
      <div
        key={index}
        className="flex flex-col h-fit w-full rounded p-2 shadow-sm shadow-black/5 lg:p-3 gap-4 border border-red-100 select-none"
      >
        <img
          src={imagen}
          alt={nombre}
          className="flex aspect-square object-cover rounded bg-neutral-50 lg:p-6 pointer-events-none"
        />
        <div className="flex flex-col select-text">
          <h1 className="flex w-full overflow-x-auto scrollbar-none font-semibold md:text-lg text-red-600 whitespace-nowrap">
            {nombre}
          </h1>
          <h1 className="text-xs md:text-sm text-neutral-700 -mt-1">{marca}</h1>
        </div>
        <div className="grid grid-cols-2 w-full py-1 text-center gap-1 lg:gap-2">
          <PriceContainer title="Unidad" price={precio} />
          <PriceContainer
            title={`Bulto x${unidadesPorBulto}`}
            price={precioBulto}
          />
        </div>
        <p className="text-sm text-neutral-500 text-center">
          Los precios representados son por unidad
        </p>
        <div className="flex justify-between">
          <Heart
            onClick={() => {
              setFav(!fav);
              window.navigator.vibrate(50);
            }}
            className={`cursor-pointer size-10 active:scale-95 p-2 rounded text-red-600 bg-white border border-red-300 shrink-0 ${
              fav ? "fill-red-600" : ""
            }`}
          />
          <div className="cursor-pointer active:scale-95 flex py-2 px-3 rounded text-white bg-red-600 border border-red-300 gap-2 items-center">
            <p>Añadir</p>
            <ShoppingCart className="size-5 shrink-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
