import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './PokemonListItem.module.css'

const PokemonListItem = (props) => {

	const [pic, setPic] = useState([])
	const [id, setId] = useState([])
	const [pokemonDetails, setPokemonDetails] = useState()
	const secondFetch = props.url

	// console.log(props);

	useEffect(() => {
		fetch(secondFetch)
			.then(response => response.json())
			.then(json => {
				// console.log(json);
				setPic(json.sprites.other.dream_world.front_default)
				setId(json.id)
				setPokemonDetails(json)
				// console.log(json.id);
			})
	})
	// console.log(pic);
	// console.log(id);
	return (
		<div className={style.pokemonListItem}>
			<article>
				<Link to={`/pokemon/${id}`} state={pokemonDetails}>
					<img src={pic} alt={props.name} />
				</Link>
			</article>
			<div>
				<h2>#{id}</h2>
				<h2>{props.name}</h2>
			</div>
		</div>
	);
};

export default PokemonListItem;