import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
const NavBar = ({ isLoggedIn, setIsloggedIn }) => {
  return (
    <nav className="flex h-auto w-[70%] mx-auto items-center justify-around text-white pt-5 ">
      <div>
        <Link to="/">
          <img src={logo} alt="" className="w-25" />
        </Link>
      </div>
      <ul className="flex items-center  space-x-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>

      <div className="space-x-5">
        {!isLoggedIn && (
          <Link to={"/login"}>
            <button
              className="px-2 py-1 rounded bg-gray-700"
              onClick={() => {
                setIsloggedIn(false);
                // toast.success("Log out successfully");
              }}
            >
              Log in{" "}
            </button>
          </Link>
        )}

        {!isLoggedIn && (
          <Link to={"/signup"}>
            <button
              className="px-2 py-1 rounded bg-gray-700"
              onClick={() => {
                setIsloggedIn(false);
                // toast.success("Log out successfully");
              }}
            >
              Sign up{" "}
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to={"/"}>
            <button
              className="px-2 py-1 rounded bg-gray-700"
              onClick={() => {
                setIsloggedIn(false);
                toast.success("Log out successfully");
              }}
            >
              Log out{" "}
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to={"/dashboard"}>
            <button
              className="px-2 py-1 rounded bg-gray-700"
              onClick={() => {
                // setIsloggedIn(false);
                // toast.success("Log out successfully");
              }}
            >
              Dashboard{" "}
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
