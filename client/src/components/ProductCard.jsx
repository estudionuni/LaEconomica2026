import React, { useState } from "react";
import { assets, productosList } from "../assets/assets";
import { Heart, ShoppingCart } from "lucide-react";

const PriceContainer = ({ title, price }) => {
  return (
    <div className="flex flex-col rounded overflow-hidden border border-red-100">
      <p className="text-red-600 text-sm sm:text-md lg:text-lg font-medium bg-red-100 w-full py-0.5">
        {title}
      </p>
      <h2 className="flex text-red-600 bg-white lg:text-lg py-1 items-center justify-center gap-0.5">
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
}) => {
  const [fav, setFav] = useState(false);
  return (
    <>
      <div className="flex flex-col w-full h-fit rounded p-2 shadow-sm shadow-black/5 lg:p-3 gap-4 border border-red-100 select-none">
        <img
          src={imagen}
          alt={nombre}
          className="flex aspect-square w-full object-cover rounded bg-neutral-50 lg:p-6 pointer-events-none"
        />
        <div className="flex flex-col select-text">
          <h1 className="flex w-full overflow-x-auto scrollbar-none font-semibold text-sm md:text-lg text-red-600 whitespace-nowrap">
            {nombre}
          </h1>
          <h1 className="text-xs md:text-sm text-neutral-700">{marca}</h1>
        </div>
        <div className="grid grid-cols-2 w-full py-1 text-center gap-1">
          <PriceContainer title="Unidades" price={precio} />
          <PriceContainer
            title={`Bulto x${unidadesPorBulto}`}
            price={precioBulto}
          />
        </div>
        <div className="flex justify-between">
          <Heart
            onClick={() => {
              setFav(!fav);
              window.navigator.vibrate(50);
            }}
            className={`cursor-pointer active:scale-102 size-10 p-2 rounded text-red-600 bg-white border border-red-300 shrink-0 ${
              fav ? "fill-red-600" : ""
            }`}
          />
          <div className="cursor-pointer active:scale-102 flex py-2 px-3 rounded text-white bg-red-600 border border-red-300 gap-2 items-center">
            <p>Añadir</p>
            <ShoppingCart className="size-5 shrink-0" />
          </div>
        </div>

        <p className="text-xs text-neutral-500 text-center">
          Los precios representados son por unidad
        </p>
      </div>
    </>
  );
};

export default ProductCard;
