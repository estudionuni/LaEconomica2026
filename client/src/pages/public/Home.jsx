import { assets } from "../../assets/assets";
import CategoriesList from "../../components/CategoriesList";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        {/*Barra de navegación */}
        <SearchBar />
        {/*Banner principal */}
        <img
          src={assets.banner_desktop}
          alt="banner"
          className="w-full aspect-25/6.8 object-cover select-none pointer-events-none"
        />
        {/*Lista de categorías */}
        <CategoriesList />
        <div className="h-screen bg-white" />
      </div>
    </>
  );
};

export default Home;
