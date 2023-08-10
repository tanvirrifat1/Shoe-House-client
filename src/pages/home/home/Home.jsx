import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularShoes from "../popularShoes/PopularShoes";
import Featured from "../Featured/Featured";
import FindSection from "../Featured/FindSection/FindSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularShoes />
      <Featured />
      <FindSection />
    </div>
  );
};

export default Home;
