import {useEffect, useState} from "react";

import styles from "./mainPage.module.scss";

import pokemonTitle from "../../assets/img/pokemon-title.png";
import hamburgerMenuIcon from "../../assets/img/icons/hamburger-menu-icon.svg";
import lightThemeIcon from "../../assets/img/icons/light-theme-icon.svg";
import darkThemeIcon from "../../assets/img/icons/dark-theme-icon.svg";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import NavBar from "../../components/navigation/NavBar.jsx";


const MainPage = ({isDarkModeEnabled, setIsDarkModeEnabled}) => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if(location.pathname === "/") {
			navigate("/pokemon");
		}
	}, []);

	const [isMenuExpanded, setIsMenuExpanded] = useState(false);

	const toggleTheme = () => {
		setIsDarkModeEnabled(!isDarkModeEnabled);
	};

	const clickListener = (event) => {
		if(!(event.target === document.getElementById("typeMenu"))){
			setIsMenuExpanded(false);
		}
	}

	useEffect(() => {
		const app = document.getElementById("app");
		if(isDarkModeEnabled){
			app.classList.remove("light");
			app.classList.add(styles.dark);
		}
		else {
			app.classList.remove(styles.dark);
			app.classList.add("light");
		}
	}, [isDarkModeEnabled]);

	useEffect(() => {
		const typeMenu = document.getElementById("typeMenu");
		if(isMenuExpanded){
			typeMenu.style.left = "0";
			document.addEventListener("click", clickListener, true);
		}
		else {
			typeMenu.style.left = "-500px";
			document.removeEventListener("click", clickListener, true);
		}

	}, [isMenuExpanded]);

	return (
		<div id="mainPage" className={[styles.mainPage].join(" ")}>
			<header>
				<Link to="/">
					<img src={pokemonTitle} alt="Pokemon"/>
				</Link>
				<form action="#" onSubmit={(event) => event.preventDefault()}>
					<button onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
						<img src={hamburgerMenuIcon} alt="Menu"/>
					</button>
					<input type="text"/>
					<button onClick={toggleTheme}>
						<img src={isDarkModeEnabled ? lightThemeIcon : darkThemeIcon} alt="theme-toggle"/>
					</button>
				</form>
			</header>

			<aside id="typeMenu">
				<NavBar/>
			</aside>
			<Outlet/>
		</div>
	);
};

export default MainPage;