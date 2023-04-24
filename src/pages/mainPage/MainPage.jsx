import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import NavBar from "../../components/navigation/NavBar.jsx";
import styles from "./mainPage.module.scss";

import pokemonTitle from "../../assets/img/pokemon-title.png";
import hamburgerMenuIcon from "../../assets/img/icons/hamburger-menu-icon.svg";
import lightThemeIcon from "../../assets/img/icons/light-theme-icon.svg";
import darkThemeIcon from "../../assets/img/icons/dark-theme-icon.svg";

const MainPage = ({ isDarkModeEnabled, setIsDarkModeEnabled }) => {

	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/pokemon");
		}
	}, []);


	useEffect(() => {
		const app = document.getElementById("app");
		if (isDarkModeEnabled) {
			app.classList.remove("light");
			app.classList.add(styles.dark);
		} else {
			app.classList.remove(styles.dark);
			app.classList.add("light");
		}
	}, [isDarkModeEnabled]);
	const toggleTheme = () => {
		setIsDarkModeEnabled(!isDarkModeEnabled);
	};

	const [isMenuExpanded, setIsMenuExpanded] = useState(false);
	useEffect(() => {
		document.getElementById("typeMenu").style.left = isMenuExpanded ? "0" : "-500px";
	}, [isMenuExpanded]);

	const handleMenuBack = (event) => {
		if (isMenuExpanded && !document.getElementById("typeMenu").contains(event.target)){
			setIsMenuExpanded(false);
		}
	}

	const handleSearch = (event) => {
		console.log(event.target.value)
	}

	return (
		<div id="mainPage" className={[styles.mainPage].join(" ")} onClick={handleMenuBack}>
			<header>
				<Link to="/pokemon">
					<img src={pokemonTitle} alt="Pokemon" />
				</Link>
				<section>
					<button onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
						<img src={hamburgerMenuIcon} alt="Menu" />
					</button>
					<input type="text" onChange={handleSearch} />
					<button onClick={toggleTheme} id="toggleThemeButton">
						<img src={isDarkModeEnabled ? lightThemeIcon : darkThemeIcon} alt="theme-toggle" />
					</button>
				</section>
			</header>

			<aside id="typeMenu">
				<NavBar setMenuState={setIsMenuExpanded}/>
			</aside>
			<Outlet />
		</div>
	);
};

export default MainPage;