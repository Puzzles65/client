import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div className="home">
      <MainCarousel />
      <ShoppingList />
      <Newsletter />
    </div>
  );
};

export default Home;
