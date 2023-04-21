import {Link} from "react-router-dom";
import style from "./NavButton.module.scss";
const NavButton = ({to, text}) => {
	return (
		<Link to={to} className={style.navButton}>
			{text}
		</Link>
	);
};

export default NavButton;