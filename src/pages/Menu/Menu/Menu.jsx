import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/assets/watchMenu2.png";
import RolexCover from "../../../assets/assets/cover3.jpg";
import OmegaCover from "../../../assets/assets/watchCover4.png";
import TAG_HeuerCover from "../../../assets/assets/tag.png";
import GarminCover from "../../../assets/assets/category/watch6.png";
import BreitlingCover from "../../../assets/assets/category/watch20.png";
import { useMenu } from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const Rolex = menu.filter((item) => item.category === "Rolex");
  const Omega = menu.filter((item) => item.category === "Omega");
  const TAG_Heuer = menu.filter((item) => item.category === "TAG_Heuer");
  const Fitbit = menu.filter((item) => item.category === "Fitbit");
  const Garmin = menu.filter((item) => item.category === "Garmin");
  const Breitling = menu.filter((item) => item.category === "Breitling");

  return (
    <div>
      <Helmet>
        <title>Time-Square | Category</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Watch CatEgorY"} />
      {/* main cover */}
      <SectionTitle subHeading="Don't miss" heading="today's offer" />
      {/* offer */}
      <MenuCategory items={Fitbit} />
      {/* rolex */}
      <MenuCategory items={Rolex} title="Rolex" img={RolexCover} />
      {/* Omega */}
      <MenuCategory items={Omega} title="Omega" img={OmegaCover} />
      {/* Garmin */}
      <MenuCategory items={Garmin} title="Garmin" img={GarminCover} />
      {/* Breitling */}
      <MenuCategory items={Breitling} title="Breitling" img={BreitlingCover} />
      {/* TAG_Heuer */}
      <MenuCategory items={TAG_Heuer} title="TAG_Heuer" img={TAG_HeuerCover} />
    </div>
  );
};

export default Menu;
