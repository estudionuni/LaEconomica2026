import CategoriesList from "../../components/CategoriesList";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <Navbar />
        <CategoriesList />
        <div className="h-screen bg-green-500" />
      </div>
    </>
  );
};

export default Home;
