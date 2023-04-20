import PokemonList from "../components/PokemonList.jsx";
import {Link} from "react-router-dom";

const MainPage = () => {
	return (
		<div>
			<Link to={"/pokemon/types"}>
				Steffis Pokemon Types
			</Link>
			<PokemonList/>
		</div>
	);
};

export default MainPage;