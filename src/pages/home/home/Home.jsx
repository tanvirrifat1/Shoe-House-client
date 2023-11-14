import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularShoes from "../popularShoes/PopularShoes";
import Featured from "../Featured/Featured";
import FindSection from "../Featured/FindSection/FindSection";
import Reviews from "../Category/Review";
import CategoryWatch from "../../../components/Category/CategoryWatch";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularShoes />
      <CategoryWatch />
      <Featured />
      <Reviews />
      {/* <FindSection /> */}
    </div>
  );
};

export default Home;
