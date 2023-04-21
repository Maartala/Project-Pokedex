import {Link} from "react-router-dom";
import style from "./NavButton.module.scss";
import {useTheme} from "../../hooks/themeHook.js";

const darkTheme = {
	"navbutton-color": "blue"
}

const NavButton = ({to, text}) => {
	useTheme(darkTheme);

	return (
		<Link to={to} className={style.navButton}>
			{text}
		</Link>
	);
};

export default NavButton;