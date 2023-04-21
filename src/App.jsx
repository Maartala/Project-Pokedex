import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx";
import DetailsPage from "./pages/detailsPage/DetailsPage.jsx";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes.jsx";
import {createContext, useState} from "react";
import PokemonList from "./components/PokemonList/PokemonList.jsx";
import {useBoolean} from "./hooks/themeHook.js";
import BerriesList from "./components/Berries/BerriesList.jsx";

function App() {
	const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

	const ThemeContext = createContext('light');

	return (
		<div className="App" id="app">
			<ThemeContext.Provider value="light">
				<Routes>
					<Route path="/" element={<MainPage isDarkModeEnabled={isDarkModeEnabled} setIsDarkModeEnabled={setIsDarkModeEnabled}/>}>
						<Route path="/pokemon" element={<PokemonList/>}/>
						<Route path="/pokemon/:pokeid" element={<DetailsPage/>}/>

						<Route path="/types" element={<PokemonTypes/>}/>

						<Route path="berries" element={<BerriesList/>}/>
					</Route>
				</Routes>
			</ThemeContext.Provider>

		</div>
	);
}

export default App;
