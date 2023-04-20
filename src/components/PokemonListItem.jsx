import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonListItem = (props) => {

	const [pic, setPic] = useState([])
	const [id, setId] = useState([])
	const secondFetch = props.url

	// console.log(props);

	useEffect(() => {
		fetch(secondFetch)
			.then(response => response.json())
			.then(json => {
				// console.log(json);
				setPic(json.sprites.other.dream_world.front_default)
				setId(json.id)
				// console.log(json.id);
			})
	})
	// console.log(pic);
	// console.log(id);
	return (
		<div>
			<h2>#{id}</h2>
			<Link to={`/pokemon/${props.pokeId}`}>
				<img src={pic} alt={props.name} />
			</Link>
			<h2>{props.name}</h2>
		</div>
	);
};

export default PokemonListItem;