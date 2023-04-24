import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../App';
import { Link } from 'react-router-dom';
import style from './PokemonTypes.module.scss';



const PokemonTypes = () => {

	// DarkMode 
	const isDarkModeEnabled = useContext(ThemeContext)
	console.log(isDarkModeEnabled);
	const classArray = [style.pokemontypes, isDarkModeEnabled ? style.dark : style.light];


	const [allTypes, setAllTypes] = useState([]);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/type/`)
			.then(res => res.json())
			.then(data => setAllTypes(data.results))
	}, []);


	// console.log(allTypes);

	return (
		<div className={classArray.join(" ")}>
			<h2>TYPES</h2>
			<form action="" onSubmit={(() => preventDefault())}>
				{allTypes.slice(0, 18).map((elt) => {
					// console.log(elt.name);
					return (
						<Link key={elt.name} to={`/types/${elt.name}`} id="link">{elt.name}</Link>
					)
				})}
			</form>

		</div>
	);

}

export default PokemonTypes;




