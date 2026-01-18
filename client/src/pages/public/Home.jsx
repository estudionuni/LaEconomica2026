import { assets, productosList } from "../../assets/assets";
import DesktopNavbar from "../../components/DesktopNavbar";
import ProductCard from "../../components/ProductCard";
import ProductSlider from "../../components/ProductSlider";
import SearchBar from "../../components/SearchBar";

const Divisor = ({ title }) => {
  return (
    <>
      <div className="flex items-center gap-3 my-10 px-4 lg:px-100 select-none">
        <div className="flex h-px w-full bg-neutral-800" />
        <p className="text-neutral-800 whitespace-nowrap text-2xl">{title}</p>
        <div className="flex h-px w-full bg-neutral-800" />
      </div>
    </>
  );
};

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        {/*Barra de navegación */}
        <SearchBar />
        <DesktopNavbar />
        {/*Banner principal desktop */}
        <img
          src={assets.banner_desktop}
          alt="banner"
          className="hidden md:block w-full aspect-19.2/4.2 object-scale-down select-none pointer-events-none"
        />
        {/*Banner principal mobile */}
        <img
          src={assets.banner}
          alt="banner"
          className="block md:hidden w-full aspect-square object-scale-down select-none pointer-events-none"
        />

        <Divisor title="Nuevos ingresos" />
        {/*Lista de productos */}
        <div className="grid grid-cols-2 md:grid-cols-4 px-2 lg:px-8 lg:gap-8 gap-2">
          {productosList.map((item) => (
            <ProductCard
              imagen={item.imagen}
              nombre={item.nombre}
              marca={item.marca}
              precio={item.precio}
              precioBulto={item.precioPorBulto}
              unidadesPorBulto={item.unidadesPorBulto}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
