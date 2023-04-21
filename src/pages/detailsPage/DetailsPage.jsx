import { useLocation } from 'react-router-dom';
import styles from './DetailsPage.module.css'

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

	// Zuweisung einer spezifischen Farbe zu jedem Type
	let type1Class = '';
	switch (fixedTypes1) {
		case "Normal":
			type1Class = styles.Fire;
			break;
		case "Fighting":
			type1Class = styles.Fighting;
			break;
		case "Flying":
			type1Class = styles.Flying;
			break;
		case "Poison":
			type1Class = styles.Poison;
			break;
		case "Ground":
			type1Class = styles.Ground;
			break;
		case "Rock":
			type1Class = styles.Rock;
			break;
		case "Bug":
			type1Class = styles.Bug;
			break;
		case "Ghost":
			type1Class = styles.Ghost;
			break;
		case "Steel":
			type1Class = styles.Steel;
			break;
		case "Fire":
			type1Class = styles.Fire;
			break;
		case "Water":
			type1Class = styles.Water;
			break;
		case "Grass":
			type1Class = styles.Grass;
			break;
		case "Electric":
			type1Class = styles.Electric;
			break;
		case "Psychic":
			type1Class = styles.Psychic;
			break;
		case "Ice":
			type1Class = styles.Ice;
			break;
		case "Dragon":
			type1Class = styles.Dragon;
			break;
		case "Dark":
			type1Class = styles.Dark;
			break;
		case "Fairy":
			type1Class = styles.Fairy;
			break;
		case "Unknown":
			type1Class = styles.Unknown;
			break;
		default:
			type1Class = styles.Shadow;
			break;
	}


	let type2Class = '';
	switch (fixedTypes2) {
		case "Normal":
			type2Class = styles.Fire;
			break;
		case "Fighting":
			type2Class = styles.Fighting;
			break;
		case "Flying":
			type2Class = styles.Flying;
			break;
		case "Poison":
			type2Class = styles.Poison;
			break;
		case "Ground":
			type2Class = styles.Ground;
			break;
		case "Rock":
			type2Class = styles.Rock;
			break;
		case "Bug":
			type2Class = styles.Bug;
			break;
		case "Ghost":
			type12Class = styles.Steel;
			break;
		case "Fire":
			type2Class = styles.Fire;
			break;
		case "Water":
			type2Class = styles.Water;
			break;
		case "Grass":
			type2Class = styles.Grass;
			break;
		case "Electric":
			type2Class = styles.Electric;
			break;
		case "Psychic":
			type2Class = styles.Psychic;
			break;
		case "Ice":
			type2Class = styles.Ice;
			break;
		case "Dragon":
			type2Class = styles.Dragon;
			break;
		case "Dark":
			type2Class = styles.Dark;
			break;
		case "Fairy":
			type2Class = styles.Fairy;
			break;
		case "Unknown":
			type2Class = styles.Unknown;
			break;
		default:
			type2Class = styles.Shadow;
			break;
	}

	console.log(fixedTypes1);
	console.log(fixedTypes2);

	return (
		<section className={styles.background}>
			<section className={styles.bg_card}>
				<div className={styles.pokemon_card}>
					<img src={pokemon.sprites.other.dream_world.front_default} alt="comic illustration of the pokemon" />
					<article>
						<h2>{`#${formattedId} ${fixedName}`}</h2>
						<div className={`${styles.types_flex}`}>
							<p className={type1Class}>{fixedTypes1}</p>
							{fixedTypes2 && <p className={type2Class}>{fixedTypes2}</p>}
						</div>
						<div className={styles.weight}>
							<p>{`Height: ${pokemon.height / 10} m`}</p>
							<p>{`Weight: ${pokemon.weight / 10} kg`}</p>
						</div>
						<div className={styles.stats}>
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
			</section>
		</section>
	);
}

export default DetailsPage;