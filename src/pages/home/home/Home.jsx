import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularShoes from "../popularShoes/PopularShoes";
import Featured from "../Featured/Featured";
import FindSection from "../Featured/FindSection/FindSection";
import Reviews from "../Category/Review";

const Home = () => {
  const handleReload = async () => {
    window.location.assign("/");
  };

  return (
    <div onClick={handleReload}>
      <Banner />
      <Category />
      <PopularShoes />
      <Featured />
      <Reviews />
      {/* <FindSection /> */}
    </div>
  );
};

export default Home;
