import React, { useContext } from "react";
import { ObserverContext } from "../../context/ObserverContext";
import { Link } from "react-router-dom";

export default function HeaderHome() {
  const { navIsIntersecting, location, sidebarOpen } =
    useContext(ObserverContext);

  const handleClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <ul className="header__home">
      <svg width="1.8rem" viewBox="7 0 10 24" fill="none">
        <path
          className={`header__bracket ${!navIsIntersecting && "whiteOnBlack"}`}
          d="M14 3H10V21H14"
          stroke="#000000"
          strokeWidth="0.8"
        />
      </svg>
      <div className="logo__container">
        <li className={`header__logo ${!navIsIntersecting && "whiteOnBlack"}`}>
          <svg
            viewBox="205.9497 197.3684 123.5698 123.5698"
            width="123.5698"
            height="123.5698"
          >
            <g transform="matrix(1.5446220636367798, 0, 0, 1.5446220636367798, 190.50343322753903, 181.9221954345703)">
              <path d="M50,14c19.851,0,36,16.149,36,36S69.851,86,50,86S14,69.851,14,50S30.149,14,50,14 M50,10c-22.092,0-40,17.909-40,40  c0,22.092,17.908,40,40,40s40-17.908,40-40C90,27.909,72.092,10,50,10L50,10z"></path>
              <path d="M50,44c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S46.691,44,50,44 M50,40c-5.523,0-10,4.477-10,10  c0,5.522,4.477,10,10,10c5.522,0,10-4.478,10-10C60,44.477,55.522,40,50,40L50,40z"></path>
              <path d="M72.63,27.37L59.9,40.1C62.43,42.64,64,46.14,64,50h18C82,41.16,78.42,33.16,72.63,27.37z"></path>
              <path d="M64.31,21.37l-8.05,16.11c0.75,0.38,1.471,0.82,2.141,1.32l10.8-14.4C67.67,23.24,66.03,22.23,64.31,21.37z"></path>
            </g>
          </svg>
        </li>
      </div>
      <svg width="1.8rem" viewBox="7 0 10 24" fill="none">
        <path
          className={`header__bracket ${!navIsIntersecting && "whiteOnBlack"}`}
          d="M10 21H14L14 3H10"
          stroke="#000000"
          strokeWidth="0.8"
        />
      </svg>
      {!sidebarOpen && (
        <li className="header__name">
          <Link
            to="/"
            className={`text--dark fs--h4 fw--medium hover--green ${
              !navIsIntersecting && "whiteOnBlack"
            }`}
            onClick={handleClick}
          >
            jamiebarlow
          </Link>
        </li>
      )}
    </ul>
  );
}
