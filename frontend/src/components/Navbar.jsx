import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../Context/userContext";

function Navbar() {
  const { setUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const logOut = () => {
    localStorage.clear();
    setUser({});
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between border-b border-blue-900 bg-indigo-400 py-8">
      <button type="button" onClick={logOut}>
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </button>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <button
            type="button"
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-[#0f172a]" />
            <span className="block h-0.5 w-8 animate-pulse bg-[#0f172a]" />
            <span className="block h-0.5 w-8 animate-pulse bg-[#0f172a]" />
          </button>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <button
              type="button"
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <NavLink to="/profile">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/profile">Mon Profile</a>
                </li>
              </NavLink>
              <NavLink to="/course">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/course">Cours</a>
                </li>
              </NavLink>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/cours">Mes cours</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/professeurs">Professeurs</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">Cours</a>
          </li>
          <li>
            <a href="/portfolio">Mes cours</a>
          </li>
          <li>
            <a href="/contact">Professeurs</a>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
