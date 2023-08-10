import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import { Helmet } from "react-helmet-async";

const Main = () => {
  return (
    <div className="bg-white text-black">
      <Helmet>
        <title>Time-Square | Home</title>
      </Helmet>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
