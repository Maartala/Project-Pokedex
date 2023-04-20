import { useLocation } from 'react-router-dom';

const DetailsPage = () => {

	const location = useLocation()
	// console.log(location)

	const pokemon = location.state;

	// Konvertierung des ersten Buchstabens
	let fixedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	// console.log(fixedName);

	// Konvertierung der Ids auf dreistelligen Code
	let formattedId = pokemon.id.toString().padStart(3, '0');
	// console.log(formattedId)

	return (
		<div>
			<img src={pokemon.sprites.other.dream_world.front_default} alt="" />
			<h2>{`#${formattedId} ${fixedName}`}</h2>
			<div className='types_flex'>
				<p>{pokemon.types[0].type.name}</p>
				<p>{pokemon.types[1].type.name}</p>
			</div>
			<div className='weight'>
				<p>{`Height: ${pokemon.height / 10} m`}</p>
				<p>{`Weight: ${pokemon.weight / 100} kg`}</p>
			</div>
		</div>
	);
};

export default DetailsPage;