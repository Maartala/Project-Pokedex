import {useEffect, useState} from "react";
import PokemonList from "../../components/PokemonList/PokemonList.jsx";
import {Link} from "react-router-dom";

import styles from "./main-page.module.scss";

import pokemonTitle from "../../assets/img/pokemon-title.png";
import hamburgerMenuIcon from "../../assets/img/icons/hamburger-menu-icon.svg";
import lightThemeIcon from "../../assets/img/icons/light-theme-icon.svg";
import darkThemeIcon from "../../assets/img/icons/dark-theme-icon.svg";

const MainPage = () => {
	const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

	const themeIcon = isDarkModeEnabled ? lightThemeIcon : darkThemeIcon;

	useEffect(() => {
		if (isDarkModeEnabled) {

		}
	}, [isDarkModeEnabled]);

	const toggleTheme = () => {
		setIsDarkModeEnabled(!isDarkModeEnabled);
	};

	return (
		<div className={styles.mainPage}>
			<header>
				<img src={pokemonTitle} alt="Pokemon"/>
				<form action="#">
					<button>
						<img src={hamburgerMenuIcon} alt="Menu"/>
					</button>
					<input type="text"/>
					<button onClick={toggleTheme}>
						<img src={themeIcon} alt="theme-toggle"/>
					</button>
				</form>
			</header>

			<Link to={"/pokemon/types"}>
				Steffis Pokemon Types
			</Link>
			<PokemonList/>
		</div>
	);
};

export default MainPage;