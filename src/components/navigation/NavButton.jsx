import {Link} from "react-router-dom";
import style from "./NavButton.module.scss";

const NavButton = ({to, text, setMenuState}) => {
	return (
		<Link to={to} className={style.navButton} onClick={() => setMenuState(false)}>
			{text}
		</Link>
	);
};

export default NavButton;