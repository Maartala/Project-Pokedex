import {Link} from "react-router-dom";

const PokemonListItem = (props) => {

	return (
		<div>
			<Link to={`/pokemon/${props.pokeId}`}>
				Pokemon
			</Link>
		</div>
	);
};

export default PokemonListItem;