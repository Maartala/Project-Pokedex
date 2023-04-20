import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx";
import DetailsPage from "./pages/detailsPage/DetailsPage.jsx";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes.jsx";
import {useState} from "react";

function App() {
	const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);
	return (
		<div className="App" id="app">
			<Routes>
				<Route path="/" element={<MainPage isDarkModeEnabled={isDarkModeEnabled} setIsDarkModeEnabled={setIsDarkModeEnabled}/>}/>
				<Route path="/pokemon/:pokeid" element={<DetailsPage/>}/>
				<Route path="/pokemon/types" element={<PokemonTypes/>}/>
			</Routes>
		</div>
	);
}

export default App;
