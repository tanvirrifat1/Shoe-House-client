import {
  FaBook,
  FaCalendarAlt,
  FaCartPlus,
  FaFedex,
  FaHome,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineManageHistory } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { BsSmartwatch } from "react-icons/bs";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { TOKEN } from "../pages/Shared/token/token";
import { getUserInfo } from "../pages/Shared/auth/auth.service";

const Dashboard = () => {
  const [cart] = useCart();

  const token = localStorage.getItem(TOKEN);

  const { role } = getUserInfo();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-blue-gray-800 text-white hover:text-white">
          {/* Sidebar content here */}

          {role === "admin" ? (
            <>
              {" "}
              <li onClick={() => window.location.assign("/")}>
                <div>
                  <FaHome />
                  Admin Home
                </div>
              </li>
              <li>
                <NavLink to="/dashBoard/addWatch">
                  <BsSmartwatch />
                  Add Watch
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/manageWatch">
                  <MdOutlineManageHistory />
                  Manage Watches
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/feedback">
                  <VscFeedback />
                  FeedBack
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/history">
                  <FaBook />
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashBoard/home">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/reservations">
                  <FaCalendarAlt />
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/history">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashBoard/mycart">
                  <FaCartPlus />
                  cart
                  <span className="badge bg-secondary text-white">
                    {cart?.data?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <AiOutlineMenu />
              Watch Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Rolex">
              <BiSolidCategory />
              Order Watch
            </NavLink>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
