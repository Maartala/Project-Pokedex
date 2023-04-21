import { useLocation } from 'react-router-dom';
import style from './DetailsPage.module.css'

const DetailsPage = () => {

	const location = useLocation()
	console.log(location)

	const pokemon = location.state;

	// Konvertierung des ersten Buchstabens
	let fixedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	console.log(fixedName);

	// Konvertierung der Ids auf dreistelligen Code
	let formattedId = pokemon.id.toString().padStart(3, '0');
	console.log(formattedId)

	// Konvertierung des ersten Buchstabens der Types
	let fixedTypes1 = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);
	let fixedTypes2 = '';
	if (pokemon.types.length > 1) {
		fixedTypes2 = pokemon.types[1].type.name[0].toUpperCase() + pokemon.types[1].type.name.slice(1);
	}
	// console.log(fixedTypes1);
	// console.log(fixedTypes2);

	return (

		<div className={style.pokemon_card}>
			<img src={pokemon.sprites.other.dream_world.front_default} alt="comic illustration of the pokemon" />
			<article>
				<h2>{`#${formattedId} ${fixedName}`}</h2>
				<div className={style.types_flex}>
					<p>{fixedTypes1}</p>
					{fixedTypes2 && <p>{fixedTypes2}</p>}
				</div>
				<div className={style.weight}>
					<p>{`Height: ${pokemon.height / 10} m`}</p>
					<p>{`Weight: ${pokemon.weight / 10} kg`}</p>
				</div>
				<div className={style.stats}>
					<div>
						<p>HP:</p>
						<p>{pokemon.stats[0].base_stat}</p>
					</div>
					<div>
						<p>Attack:</p>
						<p>{pokemon.stats[1].base_stat}</p>
					</div>
					<div>
						<p>Defense:</p>
						<p>{pokemon.stats[2].base_stat}</p>
					</div>
					<div>
						<p>Special-Attack:</p>
						<p>{pokemon.stats[3].base_stat}</p>
					</div>
					<div>
						<p>Special-Defense:</p>
						<p>{pokemon.stats[4].base_stat}</p>
					</div>
					<div>
						<p>Speed:</p>
						<p>{pokemon.stats[5].base_stat}</p>
					</div>
				</div>
			</article>
		</div>
	);
}

export default DetailsPage;