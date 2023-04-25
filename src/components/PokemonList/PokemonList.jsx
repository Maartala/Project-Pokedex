import PokemonListItem from "./PokemonListItem.jsx";
import { useState, useEffect, useContext } from "react";
import style from './PokemonList.module.scss'
import { FilterContext } from "../../pages/mainPage/MainPage.jsx";

const PokemonList = () => {

	const [pokemon, setPokemon] = useState([])
	const filter = useContext(FilterContext)

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`)
			.then(response => response.json())
			.then(json => {
				setPokemon(json.results)
				// console.log(json.results)
				// console.log(json);
			});
	}, [])
	// console.log(pokemon);
	return (
		<section className={style.PokemonList} >
			{pokemon.map((element, index) => {
				if (element.name.includes(filter))
					return (
						<PokemonListItem
							key={index}
							name={element.name}
							url={element.url}
						/>
					)
			})}
		</section>
	);
};

export default PokemonList;