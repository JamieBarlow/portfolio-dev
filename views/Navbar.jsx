import React from "react";

export default function Navbar() {
  return (
    <header>
      <nav className="header__nav">
        <div className="header__topline">
          <ul className="header__home">
            <svg width="1.8rem" viewBox="7 0 10 24" fill="none">
              <path
                className="header__bracket"
                d="M14 3H10V21H14"
                stroke="#000000"
                strokeWidth="0.8"
              />
            </svg>
            <div className="logo__container">
              <li className="header__logo">
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
                className="header__bracket"
                d="M10 21H14L14 3H10"
                stroke="#000000"
                strokeWidth="0.8"
              />
            </svg>
            <li className="header__name">
              <a href="/" className="text--dark fs--h4 fw--medium hover--green">
                jamiebarlow
              </a>
            </li>
          </ul>
          <button
            className="menu-button py-0"
            aria-controls="primary-navigation"
            aria-expanded="false"
          >
            <svg className="hamburger" viewBox="0 0 100 100" width="40">
              <rect
                className="line top"
                width="80"
                height="10"
                x="10"
                y="25"
                rx="5"
              ></rect>
              <rect
                className="line middle"
                width="60"
                height="10"
                x="10"
                y="45"
                rx="5"
              ></rect>
              <rect
                className="line bottom"
                width="80"
                height="10"
                x="10"
                y="65"
                rx="5"
              ></rect>
            </svg>
          </button>
          <aside className="sidebar">
            <nav>
              <div className="sidebar__link">
                <a href="/">Home</a>
              </div>
              <div className="sidebar__link">
                <a href="/#projectsAnchor">Projects</a>
              </div>
              <div className="sidebar__link">
                <a href="/aboutMe">About</a>
              </div>
              <div className="sidebar__link">
                <a href="/#contactMe">Contact</a>
              </div>
            </nav>
          </aside>
          <ul className="header__icons">
            <li>
              <a href="https://github.com/JamieBarlow/">
                <svg
                  className="social-icon"
                  role="img"
                  aria-label="GitHub"
                  width="25"
                  height="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/non_zero/sets">
                <svg
                  className="social-icon"
                  role="img"
                  aria-label="SoundCloud"
                  width="26px"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 291.319 291.319"
                >
                  <g>
                    <path d="M72.83,218.485h18.207V103.832c-6.828,1.93-12.982,5.435-18.207,10.041   C72.83,113.874,72.83,218.485,72.83,218.485z M36.415,140.921v77.436l1.174,0.127h17.033v-77.682H37.589   C37.589,140.803,36.415,140.921,36.415,140.921z M0,179.63c0,14.102,7.338,26.328,18.207,33.147V146.52   C7.338,153.329,0,165.556,0,179.63z M109.245,218.485h18.207v-109.6c-5.444-3.396-11.607-5.635-18.207-6.5V218.485z    M253.73,140.803h-10.242c0.519-3.168,0.847-6.382,0.847-9.705c0-32.182-25.245-58.264-56.388-58.264   c-16.896,0-31.954,7.775-42.287,19.955v125.695h108.07c20.747,0,37.589-17.388,37.589-38.855   C291.319,158.182,274.477,140.803,253.73,140.803z" />
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/jamie-barlow-2b4b3648">
                <svg
                  className="social-icon"
                  role="img"
                  aria-label="LinkedIn"
                  width="25"
                  height="24"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  className="social-icon"
                  role="img"
                  aria-label="Twitter"
                  width="24"
                  height="20"
                >
                  <path d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
