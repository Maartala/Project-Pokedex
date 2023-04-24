import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../../App';
import styles from '../TypesList/TypesList.module.scss';
// import TypeListItem from "./TypeListItem";
import PokemonListItem from "../../PokemonList/PokemonListItem";


const TypesList = ({ pokemon }) => {

    // DarkMode 
    const isDarkModeEnabled = useContext(ThemeContext)
    // console.log(isDarkModeEnabled);
    const classArray = [styles.typesList, isDarkModeEnabled ? styles.dark : styles.light];


    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        Promise.all(
            pokemon.slice(0, 40).map(props =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
                    .then(res => res.json())
            )
        ).then(data => {
            setPokemonDetails(data);
        });
    }, [pokemon]);

    return (
        <div className={classArray.join(" ")} >
            {pokemonDetails.map((elt, index) => (
                // <TypeListItem key={props.id} props={props} formatId={formatId} />
                <PokemonListItem key={elt.id} name={pokemon[index].pokemon.name} url={pokemon[index].pokemon.url} />
            ))}
        </div>
    );
};

export default TypesList;