import React from "react";
import "./Header.css";

const Header = () => {
  // const [menu, setMenu] = useState();
  return (
    <navbar>
      <div className="inner">
        <a href="/" className="logo">
          <img src="/" alt="" />
        </a>

        <div className="sub-menu">
          <ul className="menu">
            <li>
              <a href="/">Sign in</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <a href="/">Customer Service</a>
            </li>
          </ul>
        </div>

        <div className="main-menu">
          <div className="main__name red">
            <a href="/posting">ADD POSTING</a>
          </div>
        </div>
      </div>
    </navbar>
  );
};

export default Header;
