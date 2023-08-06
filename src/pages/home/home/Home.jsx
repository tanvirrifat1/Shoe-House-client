import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularShoes from "../popularShoes/PopularShoes";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularShoes />
    </div>
  );
};

export default Home;
