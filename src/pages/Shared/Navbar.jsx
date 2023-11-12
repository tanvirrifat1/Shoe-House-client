import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Drawer from "./Drawer/Page";
import logo from "../../assets/assets/watchMenu2.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navOption = (
    <>
      <ul className="lg:flex space-x-6 text-lg">
        <li>
          <button
            onClick={() => window.location.assign("/")}
            href="#"
            className="text-gray-300 lg:hover:text-slate-400"
          >
            Home
          </button>
        </li>
        <li>
          <button href="#" className="text-gray-300 lg:hover:text-slate-400">
            <Link to="/menu">Watch Category </Link>
          </button>
        </li>
        <li>
          <button href="#" className="text-gray-300 lg:hover:text-slate-400">
            <Link to="/order/Rolex">Order Watch</Link>
          </button>
        </li>

        <li>
          <button href="#" className="text-gray-300 lg:hover:text-slate-400">
            <Link to="/contact">Contact</Link>
          </button>
        </li>

        {user ? (
          <>
            <li>
              <button
                href="#"
                className="text-gray-300 lg:hover:text-slate-400"
              >
                <Link to="/dashBoard/mycart">DashBoard</Link>
              </button>
            </li>
          </>
        ) : (
          <></>
        )}

        {user ? (
          <>
            <li>
              <button
                onClick={handleLogOut}
                href="#"
                className="text-gray-300 lg:hover:text-slate-400"
              >
                LoginOut
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <button
                href="#"
                className="text-gray-300 lg:hover:text-slate-400"
              >
                <Link to="/login">Login</Link>
              </button>
            </li>
          </>
        )}

        <li>
          <label
            htmlFor="my-drawer-4"
            className="text-gray-300 lg:hover:text-slate-400 mt-1"
          >
            <FaShoppingCart className="text-xl " />
            <div className="badge badge-secondary text-white -mt-6 ">
              +{cart?.data?.length || 0}
            </div>
          </label>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-[#455a64] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-black dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>

        <div
          onClick={() => window.location.assign("/")}
          className="flex justify-center"
        >
          <div className="w-12 h-12 ">
            {/* <button className="btn btn-ghost normal-case text-xl">
              Time-Square
            </button> */}
            <img className="rounded-full" src={logo} alt="" />
          </div>
        </div>
        <Drawer />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>

      <div className="navbar-end">
        {user?.photoURL ? (
          <img
            className=" w-12 h-12 rounded-full dark:bg-gray-500"
            src={user?.photoURL}
            alt=""
          ></img>
        ) : (
          <></>
        )}

        <div className="ml-2">
          {user?.displayName ? <h1>{user?.displayName}</h1> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
