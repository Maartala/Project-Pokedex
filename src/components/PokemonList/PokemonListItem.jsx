import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './PokemonListItem.module.scss'

import { useContext } from "react";
import { ThemeContext } from "../../App";

const PokemonListItem = (props) => {

	const isDarkModeEnabled = useContext(ThemeContext);
	const classArray = [style.pokemonListItem, isDarkModeEnabled ? style.dark : style.light];

	const [pic, setPic] = useState([])
	const [id, setId] = useState([])
	const [pokemonDetails, setPokemonDetails] = useState()
	const secondFetch = props.url

	const pokeName = props.name[0].toUpperCase() + props.name.slice(1);

	const correctId = id.toString().padStart(3, '0');


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
	}, [])
	// console.log(pic);
	// console.log(id);
	return (
		<div className={classArray.join(" ")} >
			<article>
				<Link to={`/pokemon/${id}`} state={pokemonDetails}>
					<img src={pic} alt={props.name} />
				</Link>
			</article>
			<div>
				<h2>#{correctId}</h2>
				<h2>{pokeName}</h2>
			</div>
		</div>
	);
};

export default PokemonListItem;