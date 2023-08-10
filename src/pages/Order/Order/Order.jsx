import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/assets/cover/cover2.png";
import { useState } from "react";
import { useMenu } from "../../../hooks/useMenu";
import WatchCard from "../../../components/sectionTitle/watchCard/WatchCard";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderTab from "./OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // fetch data
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
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
