import PokemonListItem from "./PokemonListItem.jsx";
import { useState, useEffect } from "react";
import style from './PokemonList.module.css'

const PokemonList = () => {

	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
			.then(response => response.json())
			.then(json => {
				setPokemon(json.results)
				// console.log(json.results)
				// console.log(json);
			});
	}, [])
	// console.log(pokemon);
	return (
		<div className={style.PokemonList}>
			{pokemon.map((element, index) => {
				return (
					<PokemonListItem
						key={index}
						name={element.name}
						url={element.url}
					/>
				)
			})}
		</div>
	);
};

export default PokemonList;