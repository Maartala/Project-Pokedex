import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

function App() {


	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage/>}/>
				<Route path="/pokemon/:pokeid" element={<DetailsPage/>}/>
			</Routes>
		</div>
	);
}

export default App;
