import React, { useEffect, useState } from "react";
import { mainLogo } from "../../assets";
import { NAVBAR_DATA, subLinks } from "./data";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { AlignCenter } from "lucide-react";

function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [navbarColor, setNavbarColor] = useState("bg-white");

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setNavbarColor("bg-base-200");
      } else {
        setNavbarColor("bg-white");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar h-24 fixed transition-colors duration-300 ease-in-out top-0 left-0 ${navbarColor} z-40`}
    >
      {/* Navbar logo */}
      <div className="navbar-start overflow-hidden">
        <h1 className="hover:cursor-pointer">
          <a href="/">
            <img
              src={mainLogo}
              alt="main-logo"
              className="w-full h-42 max-sm:w-auto max-[399px]:w-[165px]"
            />
          </a>
        </h1>
      </div>
      {/* Navbar Links */}
      <div className="navbar-center hidden xl:flex">
        <ul className="menu menu-horizontal px-1">
          {NAVBAR_DATA.map((link) => (
            <li key={link.id}>
              <Link
                to={link.path}
                className={classNames("menu-item", {
                  "bg-gray-200": currentPath === link.path,
                })}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <details>
              <summary>Others</summary>
              <ul className="p-2">
                {subLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.path} className="menu-item">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* Navbar End */}
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-48 max-sm:w-40 md:w-auto max-[399px]:w-32"
          />
        </div>
        <div className="dropdown dropdown-end px-4 max-sm:p-0 max-sm:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                {/*Profile info */}
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {/* Mobile Navbar */}
        <div className="">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

function MobileNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="min-[1200px]:hidden  dropdown dropdown-end">
      <div tabIndex={0} className="btn btn-ghost btn-circle">
        <AlignCenter />
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 rounded-box w-52"
      >
        {NAVBAR_DATA.map((link) => (
          <li key={link.id}>
            <Link
              to={link.path}
              className={classNames("menu-item", {
                "bg-gray-200": currentPath === link.path,
              })}
            >
              {link.title}
            </Link>
          </li>
        ))}
        <li>
          <details>
            <summary>Others</summary>
            <ul className="p-2">
              {subLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.path} className="menu-item">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
        <li>
          <a className="justify-between">
            {/*Profile info */}
            Profile
            <span className="badge">New</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
