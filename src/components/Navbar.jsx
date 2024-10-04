// imports
import "../css/navbar.css";
import { PiFilmReel } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
const Navbar = () => {
  // states and consts
  const [theme, setTheme] = useState(true);
  const navigate = useNavigate();

  // functions
  const changeTheme = () => {
    setTheme(!theme);
    const bg = document.getElementById("root");

    if (theme) {
      bg.style.backgroundColor = "black";
      bg.style.color = "white";
    } else {
      bg.style.backgroundColor = "white";
      bg.style.color = "black";
    }
  };
  return (
    <nav className="navbar">
      <div onClick={() => navigate("/")} className="navbar-logo">
        <h3>KuSe | MovieApp</h3>
      </div>
      <div className="navbar-center">
        <PiFilmReel className="navbar-center-icon" />
      </div>
      <div className="navbar-right">
        <ul className="navbar-right-icons">
          <li>
            <FaHome className="navbar-right-icon" />
          </li>
          <li>
            <FaHeart className="navbar-right-icon" />
          </li>
          <li>
            {theme ? (
              <FaRegMoon onClick={changeTheme} className="navbar-right-icon" />
            ) : (
              <CiLight onClick={changeTheme} className="navbar-right-icon" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
