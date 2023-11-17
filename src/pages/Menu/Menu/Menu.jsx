import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/assets/watchMenu2.png";
import RolexCover from "../../../assets/assets/cover3.jpg";
import OmegaCover from "../../../assets/assets/watchCover4.png";
import TAG_HeuerCover from "../../../assets/assets/tag.png";
import GarminCover from "../../../assets/assets/watch7.png";
import BreitlingCover from "../../../assets/assets/category/watch20.png";
import { useMenu } from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const Rolex = menu?.filter((item) => item.category === "Rolex");
  const Omega = menu?.filter((item) => item.category === "Omega");
  const TAGHeuer = menu?.filter((item) => item.category === "TAGHeuer");
  const Fitbit = menu?.filter((item) => item.category === "Fitbit");
  const Garmin = menu?.filter((item) => item.category === "Garmin");
  const Breitling = menu?.filter((item) => item.category === "Breitling");
  const Popular = menu?.filter((item) => item.category === "popular");

  return (
    <div>
      <Helmet>
        <title>Time-Square | Category</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Watch CatEgorY"} />
      {/* main cover */}
      <SectionTitle subHeading="Don't miss" heading="today's offer" />
      {/* offer */}

      <div className="">
        <MenuCategory
          items={Fitbit}
          paragraph="Fitbit is a well-known brand in the fitness and health technology industry, specializing in wearable devices that track various aspects of your daily activity, exercise, sleep, and overall well-being. "
          title="Fitbit"
          img={BreitlingCover}
        />
        {/* rolex */}
        <MenuCategory
          items={Rolex}
          paragraph="Rolex SA is a Swiss watch designer and manufacturer based in Geneva, Switzerland. Founded in 1905 as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, the company registered Rolex as the brand name of its watches in 1908 and became Rolex Watch Co. Ltd. in 1915."
          title="Rolex"
          img={RolexCover}
        />
        {/* Omega */}
        <MenuCategory
          items={Omega}
          title="Omega"
          img={OmegaCover}
          paragraph="Omega is a Swiss luxury watchmaker that has gained worldwide recognition for its high-quality and prestigious timepieces. Founded in 1848 by Louis Brandt in La Chaux-de-Fonds, Switzerland, Omega has a rich history of innovation and excellence in watchmaking."
        />
        {/* Garmin */}
        <MenuCategory
          items={Garmin}
          title="Garmin"
          img={GarminCover}
          paragraph="Garmin is a renowned company that specializes in the development of GPS technology and navigation devices. In addition to its navigation solutions, Garmin has also gained significant recognition for its line of wearable fitness and outdoor smartwatches. Garmin watches are designed to cater to a wide range of activities, from fitness tracking and running to outdoor adventures and exploration."
        />
        {/* Breitling */}
        <MenuCategory
          items={Breitling}
          title="Breitling"
          img={BreitlingCover}
          paragraph="Breitling is a Swiss luxury watchmaker known for its high-quality and precision-crafted timepieces, particularly aviation and pilot watches. Founded in 1884 by Léon Breitling in Saint-Imier, Switzerland, the brand has a strong heritage in aviation and has become synonymous with ruggedness, reliability, and precision."
        />
        {/* TAG_Heuer */}
        <MenuCategory
          items={TAGHeuer}
          title="TAGHeuer"
          img={TAG_HeuerCover}
          paragraph="TAG Heuer is a prestigious Swiss watchmaker known for its luxury timepieces that combine advanced technology, precision craftsmanship, and sporty aesthetics. Founded in 1860 by Edouard Heuer in St-Imier, Switzerland, the brand has a rich history of innovation and has established itself as a prominent player in the world of haute horlogerie."
        />
      </div>
    </div>
  );
};

export default Menu;
