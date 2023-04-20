import './App.scss';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import PokemonTypes from "./components/PokemonTypes.jsx";

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
