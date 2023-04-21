import NavButton from "./NavButton.jsx";
import style from "./NavBar.module.scss";

const NavBar = () => {
	return (
		<nav className={style.navBar}>
			<NavButton to="/pokemon" text="Pokemon"/>
			<NavButton to="/types" text="Types"/>
			<NavButton to="/berries" text="Berries"/>
		</nav>
	);
};

export default NavBar;