import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/assets/cover/cover2.png";
import { useState } from "react";
import { useMenu } from "../../../hooks/useMenu";
import WatchCard from "../../../components/sectionTitle/watchCard/WatchCard";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = [
    "Rolex",
    "Omega",
    "TAG_Heuer",
    "Fitbit",
    "Garmin",
    "Breitling",
    "popular",
  ];

  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);

  // fetch data
  const [menu] = useMenu();
  const Rolex = menu?.filter((item) => item.category === "Rolex");
  const Omega = menu?.filter((item) => item.category === "Omega");
  const TAG_Heuer = menu?.filter((item) => item.category === "TAG_Heuer");
  const Fitbit = menu?.filter((item) => item.category === "Fitbit");
  const Garmin = menu?.filter((item) => item.category === "Garmin");
  const Breitling = menu?.filter((item) => item.category === "Breitling");
  const Popular = menu?.filter((item) => item.category === "popular");

  return (
    <div>
      <Helmet>
        <title>Time-Square | Order Watch</title>
      </Helmet>
      <Cover title={"order here"} img={img} />
      {/* tab */}
      <div className="flex justify-center items-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Rolex</Tab>
            <Tab>Omega</Tab>
            <Tab>TAG_Heuer</Tab>
            <Tab>Fitbit</Tab>
            <Tab>Garmin</Tab>
            <Tab>Breitling</Tab>
            <Tab>SPECIAL COLLECTIONS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={Rolex} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={Omega} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={TAG_Heuer} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={Fitbit} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={Garmin} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={Breitling} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={Popular} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
