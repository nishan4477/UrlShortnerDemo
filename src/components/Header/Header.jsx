import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isMobileLink, setIsMobileLink] = useState(false);
  const headerMenu = [
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Resources",
      link: "/resources",
    },
  ];
  return (
    <header className="header container__main">
      <div className="header__menu">
        <figure className="logo__wrapper">
          <img src={logo} alt="logo" />
        </figure>
        <nav className={` navbar ${isMobileLink ? "active" : "inactive"}`}>
          <ul className="nav__menu">
            {headerMenu?.map((item, index) => (
              <li className="nav__menu-item" key={index}>
                {" "}
                <Link to={item.link}>{item.name} </Link>
              </li>
            ))}
          </ul>
          <div className="header__btn">
            <Link to="/login">
              <p className="header__btn--login">Login</p>
            </Link>
            <Link to="/signup">
              <p className="header__btn--signup">Sign Up</p>
            </Link>
          </div>
        </nav>
      </div>

      <div className="mob-menu" onClick={() => setIsMobileLink(!isMobileLink)}>
        {isMobileLink ? (
          <RxCross1 size={25} color="#9c9aa3" />
        ) : (
          <RxHamburgerMenu size={25} color="#9c9aa3" />
        )}
      </div>
    </header>
  );
};

export default Header;
