import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../../App';
import style from '../TypesList/TypesList.module.scss';
import TypeListItem from "./TypeListItem";


const TypesList = ({ pokemon }) => {

    // DarkMode 
    const isDarkModeEnabled = useContext(ThemeContext)
    console.log(isDarkModeEnabled);
    const classArray = [style.typesList, isDarkModeEnabled ? style.dark : style.light];


    // Konvertierung ID
    const formatId = (id) => {
        return id.toString().padStart(3, "0");
    }

    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        Promise.all(
            pokemon.slice(0, 10).map(props =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemon.name}`)
                    .then(res => res.json())
            )
        ).then(data => {
            setPokemonDetails(data);
        });
    }, [pokemon]);

    return (
        <div className={classArray.join(" ")} >
            {/* {pokemonDetails.map((props) => (
                <div key={props.id}>
                    <img src={props.sprites.front_default} alt={props.name} />
                    <p>#{formatId(props.id)} {props.name}</p>
                </div>
            ))} */}
            {pokemonDetails.map((props) => (
                <TypeListItem key={props.id} props={props} formatId={formatId} />
            ))}
        </div>
    );
};

export default TypesList;