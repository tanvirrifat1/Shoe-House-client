import logo from ".../../../../assets/shoesLogo.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navOption = (
    <>
      <ul className="lg:flex space-x-6">
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
                <Link to={"/login"}>Login</Link>
              </button>
            </li>
          </>
        )}
        <li>
          <button href="#" className="text-gray-300 lg:hover:text-slate-400">
            <Link to="/secret">secret</Link>
          </button>
        </li>
        <li>
          <button href="#" className="text-gray-300 lg:hover:text-slate-400">
            Contact
          </button>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar fixed x-10  bg-gray-900 text-white">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <button className="btn btn-ghost normal-case text-xl">
              Time-Square
            </button>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
