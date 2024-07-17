import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const [isOpenNav, setOpenNav] = useState(false);

  const HandleNavOpen = () => {
    setOpenNav(!isOpenNav);
  };

  return (
    <nav>
      <div className="nav-container flex justify-between items-center max-w-[1200px] mx-auto my-0 mt-8 mb-10 p-5">
        <div className="title font-bold text-4xl">
          <NavLink to="/">News</NavLink>
        </div>
        <div className="nav-icon" onClick={HandleNavOpen}>
          <span
            className="text-white text-3xl cursor-pointer transition-all duration-300 ease-in-out"
            onClick={HandleNavOpen}
          >
            {isOpenNav ? (
              <AiOutlineClose className="transform scale-100 hover:scale-110" />
            ) : (
              <BiMenu className="transform scale-100 hover:scale-110" />
            )}
          </span>
        </div>
      </div>
      {isOpenNav && (
        <ul className="max-w-[1200px] mx-auto my-0 mt-2 py-3 flex flex-col justify-center items-center gap-3 bg-white rounded-lg">
          <li className="text-black">
            <NavLink
              to="/sports"
              className="font-semibold"
              activeclassname="active"
              onClick={HandleNavOpen}
            >
              Sports
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink
              to="/bitcoin"
              className="font-semibold"
              activeclassname="active"
              onClick={HandleNavOpen}
            >
              Bitcoin
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink
              to="/crime"
              className="font-semibold"
              activeclassname="active"
              onClick={HandleNavOpen}
            >
              Crime
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink
              to="/movies"
              className="font-semibold"
              activeclassname="active"
              onClick={HandleNavOpen}
            >
              Movie
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink
              to="/farming"
              className="font-semibold"
              activeclassname="active"
              onClick={HandleNavOpen}
            >
              Farming
            </NavLink>
          </li>
          <li className="text-black">
            <NavLink
              to="/political"
              className="font-semibold"
              activeclassname="active"
              onClick={HandleNavOpen}
            >
              Political
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
