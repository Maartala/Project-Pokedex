import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx";
import DetailsPage from "./pages/detailsPage/DetailsPage.jsx";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes.jsx";
import {createContext, useState} from "react";
import PokemonList from "./components/PokemonList/PokemonList.jsx";
import BerriesList from "./components/Berries/BerriesList.jsx";
import TypeDetailPage from "./pages/typesDetailPage/TypeDetailPage.jsx";
import BerriesDetails from "./components/Berries/BerriesDetails.jsx";

export const ThemeContext = createContext(false);

function App() {
	const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);



	return (
		<div className="App" id="app">
			<ThemeContext.Provider value={false}>
				<Routes>
					<Route path="/" element={<MainPage isDarkModeEnabled={isDarkModeEnabled} setIsDarkModeEnabled={setIsDarkModeEnabled}/>}>
						<Route path="/pokemon" element={<PokemonList/>}/>
						<Route path="/pokemon/:pokeid" element={<DetailsPage/>}/>

						<Route path="/types" element={<PokemonTypes/>}/>
						<Route path="/types/:id" element={<TypeDetailPage/>}/>

						<Route path="berries" element={<BerriesList/>}/>
						<Route path="berries/:id" element={<BerriesDetails/>}/>
					</Route>
				</Routes>
			</ThemeContext.Provider>

		</div>
	);
}

export default App;
