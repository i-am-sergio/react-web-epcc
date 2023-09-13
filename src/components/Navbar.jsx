import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import "../css/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav id="navbar" className="w-full flex py-6 justify-between navbar">
      <div className="flex py-6 justify-between container-nav">
        <img src={logo} alt="EPCC" className="h-[25px] logocs" />

        {/* <div> */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li
            className={`font-poppins font-normal cursor-pointer text-[16px]
              ${"text-dimWhite"} ${"mr-10"}`}
          >
            <a href="" target="blank" className="btn-registrate">
              Registrate
            </a>
          </li>
        </ul>
        {/* </div> */}
      </div>

      <div
        id="toggle-syles"
        className="sm:hidden flex flex-1 justify-end px-5 items-center"
      >
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] btn-registrate-container-responsive 
              ${"text-dimWhite"} ${"mr-4"}`}
            >
              <a href="" target="blank" className="btn-registrate">
                Registrate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
