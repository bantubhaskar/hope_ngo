import React, { useState } from "react";
import { FaBars, FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa"; // Import Font Awesome icons
import "./Header.css";
import NavItems from "./NavItems";
import LogoImage from "./HOPE PNG.PNG";

function Header() {
  const [showBar, setNavMenu] = useState(false);

  return (
    <div className="nav-section">
      <div className="logo-content">
        <img src={LogoImage} alt="Logo" className="logo-image" />
        <span className="logo">
          <span className="col-word"></span>Hope
        </span>
      </div>

      <div className={showBar ? "responsive-sec" : "nav-items "}>
        <ul className="nav-list">
          {NavItems.map((item) => {
            let icon = null;
            switch (item.title) {
              case "Home":
                icon = <FaHome />;
                break;
              case "About":
                icon = <FaInfoCircle />;
                break;
              case "Contact":
                icon = <FaPhoneAlt />;
                break;
              default:
                break;
            }
            return (
              <li key={item.key}>
                <a className={item.cName} href={item.url}>
                  {icon} {/* Display icon */}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      
      <div className="toggel">
        <a href="#" onClick={() => setNavMenu(!showBar)}>
          <FaBars className="toggel-bar" />{" "}
        </a>
      </div>
    </div>
  );
}

export default Header;
