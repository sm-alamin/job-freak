import { NavLink } from "react-router-dom";
import './Navigation.css';
const Navbar = () => {

  const navitems =
  <>
  <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          
          
          <li>
            <NavLink
              to="/guide"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Guide
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              About
            </NavLink>
          </li>
         
          
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Contact
            </NavLink>
          </li>
  </>
  return (
    <div className="navbar-start text-black dark:text-white z-50 fixed top-0 left-0 w-32">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
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
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-gray-700  rounded-box w-52"
        >
          {
            navitems
          }
        </ul>
      </div>
     
    </div>
     <div className="navbar-center hidden lg:flex -mt-6">
        <ul className="menu menu-verticle h-screen text-black bg-slate-200 dark:bg-gray-700 dark:text-white custom-menu">
        {
            navitems
          }
          
        </ul>
      </div>
    
  </div>
  );
};

export default Navbar;
