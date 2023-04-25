import { Link } from "react-router-dom";
import style from "./NavButton.module.scss";
import { ThemeContext } from "../../App.jsx";
import { useContext } from "react";

const NavButton = ({ to, text, setMenuState }) => {
  const isDarkModeEnabled = useContext(ThemeContext);
  const classArray = [style.navButton, isDarkModeEnabled ? style.dark : null];
  return (
    <Link
      to={to}
      className={classArray.join(" ")}
      onClick={(event) => {
        setMenuState(false);
      }}
    >
      {text}
    </Link>
  );
};

export default NavButton;
