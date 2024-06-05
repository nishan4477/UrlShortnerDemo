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
    <header>
      <div className="container__main ">
        <div className="header__container">
          <div className="header__menu">
            <div className="logo__wrapper">
              <img src={logo} alt="logo" />
            </div>
            <nav className={isMobileLink ? "active" : ""}>
              <ul>
                {headerMenu?.map((item, index) => (
                  <Link key={index} to={item.link}>
                    {" "}
                    <li>{item.name}</li>{" "}
                  </Link>
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

        
          <div
            className="mob-menu"
            onClick={() => setIsMobileLink(!isMobileLink)}
          >
           {isMobileLink ? <RxCross1 size={25} color="#9c9aa3" />: <RxHamburgerMenu size={25} color="#9c9aa3" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
