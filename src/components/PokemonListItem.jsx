import {Link} from "react-router-dom";

const PokemonListItem = ({pokeId}) => {

	return (
		<div>
			<Link to={`/pokemon/${pokeId}`}>
				Pokemon
			</Link>
		</div>
	);
};

export default PokemonListItem;