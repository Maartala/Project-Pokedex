import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './DetailsPage.module.css'

import { useContext } from "react";
import { ThemeContext } from "../../App";

const DetailsPage = () => {

	// Implementieren eines Darkmodes
	const isDarkModeEnabled = useContext(ThemeContext);
	const classArray = [styles.Detailspage, styles.background, isDarkModeEnabled ? styles.dark : styles.light];

	// =========================================================
	// INPUT
	const location = useLocation()
	// console.log(location)

	// Deklarierung neuer Variable aus schreibfaulen Gründen
	const pokemon = location.state;

	// =========================================================
	// POKEMON-NAME
	// Konvertierung des ersten Buchstabens
	let fixedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	// console.log(fixedName);

	// =========================================================
	// POKEMON-ID
	// Konvertierung der Ids auf dreistelligen Code
	let formattedId = pokemon.id.toString().padStart(3, '0');
	// console.log(formattedId)

	// =========================================================
	// TYPES
	// Konvertierung des ersten Buchstabens der Types
	let fixedTypes1 = pokemon.types[0].type.name[0].toUpperCase() + pokemon.types[0].type.name.slice(1);
	let fixedTypes2 = '';
	if (pokemon.types.length > 1) {
		fixedTypes2 = pokemon.types[1].type.name[0].toUpperCase() + pokemon.types[1].type.name.slice(1);
	}
	// console.log(fixedTypes1);
	// console.log(fixedTypes2);

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
			type2Class = styles.Steel;
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
	// =========================================================
	// STATS
	// HEALTH
	// grafische Einbindung des Health-Wertes in die Pokemon-Card
	function changeWidthHP(pokemon) {
		const [widthHP, setWidthHP] = useState();

		useEffect(() => {
			setWidthHP(pokemon.stats[0].base_stat);
		}, [pokemon.stats[0].base_stat])
		return `${(widthHP * 100 / 110)}%`
	}

	// ATTACK
	// grafische Einbindung des Attack-Wertes in die Pokemon-Card
	function changeWidthATK(pokemon) {
		const [widthATK, setWidthATK] = useState();

		useEffect(() => {
			setWidthATK(pokemon.stats[1].base_stat);
		}, [pokemon.stats[1].base_stat])
		return `${(widthATK * 100 / 110)}%`
	}

	// DEFENSE
	// grafische Einbindung des Defense-Wertes in die Pokemon-Card
	function changeWidthDEF(pokemon) {
		const [widthDEF, setWidthDEF] = useState();

		useEffect(() => {
			setWidthDEF(pokemon.stats[2].base_stat);
		}, [pokemon.stats[2].base_stat])
		return `${(widthDEF * 100 / 110)}%`
	}

	// SPECIAL-ATTACK
	// grafische Einbindung des SP-Attack-Wertes in die Pokemon-Card
	function changeWidthSPATK(pokemon) {
		const [widthSPATK, setWidthSPATK] = useState();

		useEffect(() => {
			setWidthSPATK(pokemon.stats[3].base_stat);
		}, [pokemon.stats[3].base_stat])
		return `${(widthSPATK * 100 / 110)}%`
	}

	// SPECIAL-DEFENSE
	// grafische Einbindung des SP-Defense-Wertes in die Pokemon-Card
	function changeWidthSPDEF(pokemon) {
		const [widthSPDEF, setWidthSPDEF] = useState();

		useEffect(() => {
			setWidthSPDEF(pokemon.stats[4].base_stat);
		}, [pokemon.stats[4].base_stat])
		return `${(widthSPDEF * 100 / 110)}%`
	}

	// SPEED
	// grafische Einbindung des Speed-Wertes in die Pokemon-Card
	function changeWidthSPD(pokemon) {
		const [widthSPD, setWidthSPD] = useState();

		useEffect(() => {
			setWidthSPD(pokemon.stats[5].base_stat);
		}, [pokemon.stats[5].base_stat])
		return `${(widthSPD * 100 / 110)}%`
	}

	// ====== RETURN =====================================================

	return (
		<section className={classArray.join(" ")}>
			<section className={styles.bg_card}>
				<div className={styles.pokemon_card}>
					<img src={pokemon.sprites.other.dream_world.front_default} alt={`comic illustration of ${fixedName}`} />
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
							<div className={styles.animation}>
								<p>Health</p>
								<div className={styles.fenster}>
									<p className="hpBar" style={{ width: changeWidthHP(pokemon) }}>{pokemon.stats[0].base_stat}</p>
								</div>
							</div>
							<div className={styles.animation}>
								<p>Attack</p>
								<div className={styles.fenster}>
									<p className="atkBar" style={{ width: changeWidthATK(pokemon) }}>{pokemon.stats[1].base_stat}</p>
								</div>
							</div>
							<div className={styles.animation}>
								<p>Defense</p>
								<div className={styles.fenster}>
									<p className="defBar" style={{ width: changeWidthDEF(pokemon) }}>{pokemon.stats[2].base_stat}</p>
								</div>
							</div>
							<div className={styles.animation}>
								<p>SP-Atk</p>
								<div className={styles.fenster}>
									<p className="spATKBar" style={{ width: changeWidthSPATK(pokemon) }}>{pokemon.stats[3].base_stat}</p>
								</div>
							</div>
							<div className={styles.animation}>
								<p>SP-Def</p>
								<div className={styles.fenster}>
									<p className="spDEFBar" style={{ width: changeWidthSPDEF(pokemon) }}>{pokemon.stats[4].base_stat}</p>
								</div>
							</div>
							<div className={styles.animation}>
								<p>Speed</p>
								<div className={styles.fenster}>
									<p className="speedBar" style={{ width: changeWidthSPD(pokemon) }}>{pokemon.stats[5].base_stat}</p>
								</div>
							</div>
						</div>
					</article>
				</div>
			</section>
		</section>
	);
}

export default DetailsPage;