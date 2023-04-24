import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styles from './PokemonTypes.module.css';
// import logo from "../../assets/img/pokemon-title.png"


const PokemonTypes = () => {

	const [allTypes, setAllTypes] = useState([]);


	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/type/`)
			.then(res => res.json())
			.then(data => setAllTypes(data.results))
	}, []);


	// console.log(allTypes);

	return (
		<div className={styles.pokemontypes}>
			{/* <img src={logo} alt="Logo" /> */}
			<h2>TYPES</h2>
			<form action="" onSubmit={(() => preventDefault())}>
				{allTypes.map((elt) => {
					// console.log(elt.name);
					return (
						<Link key={elt.name} to={`/types/${elt.name}`}>{elt.name}</Link>
					)
				})}
			</form>

		</div>
	);

}

export default PokemonTypes;




