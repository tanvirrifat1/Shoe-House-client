import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImg from "../../../assets/assets/watchMenu2.png";
import PopularMenu from "../../home/popularShoes/PopularShoes";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Time-Square | Category</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Watch CatEgorY"} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
