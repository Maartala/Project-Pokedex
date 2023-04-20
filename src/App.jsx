import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage.jsx";
import DetailsPage from "./pages/detailsPage/DetailsPage.jsx";
import PokemonTypes from "./components/PokemonTypes/PokemonTypes.jsx";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/pokemon/:pokeid" element={<DetailsPage/>}/>
				<Route path="/pokemon/types" element={<PokemonTypes/>}/>
			</Routes>
		</div>
	);
}

export default App;
