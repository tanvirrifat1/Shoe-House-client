import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from "../../../assets/assets/cover/cover2.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>Time-Square | Order</title>
      </Helmet>
      <Cover title={"order here"} img={img} />
      {/* tab */}
      <div className="flex justify-center items-center btn">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Rolex</Tab>
            <Tab>Omega</Tab>
            <Tab>TAG_Heuer</Tab>
            <Tab>Fitbit</Tab>
            <Tab>Garmin</Tab>
            <Tab>Breitling</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
