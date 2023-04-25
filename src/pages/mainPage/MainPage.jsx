import { createContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import NavBar from "../../components/navigation/NavBar.jsx";
import styles from "./mainPage.module.scss";

import pokemonTitle from "../../assets/img/pokemon-title.png";
import hamburgerMenuIcon from "../../assets/img/icons/hamburger-menu-icon.svg";
import lightThemeIcon from "../../assets/img/icons/light-theme-icon.svg";
import darkThemeIcon from "../../assets/img/icons/dark-theme-icon.svg";

export const FilterContext = createContext({});

const MainPage = ({ isDarkModeEnabled, setIsDarkModeEnabled }) => {
	const location = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/pokemon");
		}
	}, [location, navigate]);

	useEffect(() => {
		const app = document.getElementById("app");
		isDarkModeEnabled
			? app.classList.add(styles.dark)
			: app.classList.remove(styles.dark);
	}, [isDarkModeEnabled]);

	const toggleTheme = () => setIsDarkModeEnabled(!isDarkModeEnabled);

	const [isMenuExpanded, setIsMenuExpanded] = useState(false);

	useEffect(() => {
		const typeMenu = document.getElementById("typeMenu");
		typeMenu.style.left = isMenuExpanded ? "0" : "-500px";
	}, [isMenuExpanded]);

	const handleMenuBack = (event) => {
		if (
			isMenuExpanded &&
			!document.getElementById("typeMenu").contains(event.target)
		) {
			setIsMenuExpanded(false);
		}
	};

	const [filter, setFilter] = useState("");

	const handleSearch = (event) => setFilter(event.target.value.toLowerCase());


	const classArray = [styles.mainPage, isDarkModeEnabled ? styles.dark : null]
	return (
    <div
      id="mainPage"
      className={classArray.join(" ")}
      onClick={handleMenuBack}
    >
      <header>
        <Link to="/pokemon">
          <img src={pokemonTitle} alt="Pokemon" />
        </Link>
        <section>
          <button onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
            <img src={hamburgerMenuIcon} alt="Menu" />
          </button>
          <input
            type="text"
            onChange={handleSearch}
            placeholder={"Search a Pokemon"}
          />
          <button onClick={toggleTheme} id="toggleThemeButton">
            <img
              src={isDarkModeEnabled ? lightThemeIcon : darkThemeIcon}
              alt="theme-toggle"
            />
          </button>
        </section>
      </header>

      <aside id="typeMenu">
        <NavBar setMenuState={setIsMenuExpanded} />
      </aside>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Outlet />
      </FilterContext.Provider>
    </div>
  );
};

export default MainPage;
