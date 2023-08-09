import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularShoes from "../popularShoes/PopularShoes";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularShoes />
      <Featured />
    </div>
  );
};

export default Home;
