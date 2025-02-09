// react icons
import { FcStackOfPhotos } from "react-icons/fc";
import { FaHeartCirclePlus } from "react-icons/fa6";

// links router dom
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

const themeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "silentforest";
};

function Navbar() {
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const toggleTheme = () => {
    const newTheme = theme == "silentforest" ? "magicalbro" : "silentforest";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-200">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <Link to="/" className="hidden md:flex">
            <FcStackOfPhotos className="w-7 h-7" />
          </Link>
          <div className="dropdown flex md:hidden">
            <div tabIndex={0} role="button">
              <FcStackOfPhotos className="w-7 h-7" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal rounded-box ">
            <NavLinks />
          </ul>
        </div>
        <div
          className="navbar-end flex items-center gap-5
        "
        >
          <Link>
            <div className="indicator ">
              <span className="indicator-item badge badge-sm badge-secondary ">
                0
              </span>

              <FaHeartCirclePlus className="h-7 w-7 " />
            </div>
          </Link>

          <label className="toggle text-base-content">
            <input
              onClick={toggleTheme}
              type="checkbox"
              value="synthwave"
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
