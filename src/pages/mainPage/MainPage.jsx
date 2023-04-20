import {useEffect, useState} from "react";
import PokemonList from "../../components/PokemonList/PokemonList.jsx";
import {Link} from "react-router-dom";

import styles from "./mainPage.module.scss";

import pokemonTitle from "../../assets/img/pokemon-title.png";
import hamburgerMenuIcon from "../../assets/img/icons/hamburger-menu-icon.svg";
import lightThemeIcon from "../../assets/img/icons/light-theme-icon.svg";
import darkThemeIcon from "../../assets/img/icons/dark-theme-icon.svg";
import PokemonTypes from "../../components/PokemonTypes/PokemonTypes.jsx";


const MainPage = ({isDarkModeEnabled, setIsDarkModeEnabled}) => {

	const [isMenuExpanded, setIsMenuExpanded] = useState(false);

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
		}
		else {
			typeMenu.style.left = "-80vw";
		}
	})

	const expandTypeMenu = () => {
		setIsMenuExpanded(!isMenuExpanded)
	}
	const toggleTheme = () => {
		setIsDarkModeEnabled(!isDarkModeEnabled);
	};

	return (
		<div id="mainPage" className={styles.mainPage}>
			<header>
				<img src={pokemonTitle} alt="Pokemon"/>
				<form action="#" onSubmit={(event) => event.preventDefault()}>
					<button onClick={expandTypeMenu}>
						<img src={hamburgerMenuIcon} alt="Menu"/>
					</button>
					<input type="text"/>
					<button onClick={toggleTheme}>
						<img src={isDarkModeEnabled ? lightThemeIcon : darkThemeIcon} alt="theme-toggle"/>
					</button>
				</form>
			</header>
			<aside id="typeMenu">
				<PokemonTypes/>
			</aside>

			<Link to={"/pokemon/types"}>
				Steffis Pokemon Types
			</Link>
			<PokemonList/>
		</div>
	);
};

export default MainPage;