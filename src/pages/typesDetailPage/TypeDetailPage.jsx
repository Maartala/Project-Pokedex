import style from './TypeDetailPage.module.scss';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../App';
import TypesList from '../../components/PokemonTypes/TypesList/TypesList';
// //import classNames from 'classnames';  -> npm install classnames

const TypeDetailPage = () => {

    const typeName = useParams();
    console.log(typeName);

    const [typeDetails, setTypeDetails] = useState([])

    useEffect(() => {
        console.log(typeName);
        fetch(`https://pokeapi.co/api/v2/type/${typeName.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTypeDetails([data])
            })
    }, [])

    console.log(typeDetails);

    //DarkMode:
    const isDarkModeEnabled = useContext(ThemeContext)
    console.log(isDarkModeEnabled);


    const classArray = [style.typeDetail, isDarkModeEnabled ? style.dark : style.light];


    // //const isDarkModeEnabled = useContext(ThemeContext);
    // //console.log(isDarkModeEnabled);
    // //const classArray = classNames(
    // //    style.typeDetail,
    // //     {
    // //         [style.dark]: isDarkModeEnabled,
    // //         [style.light]: !isDarkModeEnabled
    // //     }
    // // );


    return (
        <div className={classArray.join(" ")} /*className={classArray}*/ >
            <h2>{`${typeName.id.toUpperCase()}`}</h2>
            {typeDetails.map((elt) => {
                return (
                    <div key={elt.name}>
                        <section className={style.damage_flex} >
                            <article>
                                <h3> gives damage to</h3>
                                <article>
                                    <p>double damage:</p>
                                    {elt.damage_relations.double_damage_to.map((elt) => (
                                        <p key={elt.name}>{elt.name}</p>
                                    ))}
                                    <p>half damage:</p>
                                    {elt.damage_relations.half_damage_to.map((elt) => (
                                        <p key={elt.name}>{elt.name}</p>
                                    ))}
                                </article>
                            </article>
                            <article>
                                <h3>gets damage from</h3>
                                <article>
                                    <p>double damage:</p>
                                    {elt.damage_relations.double_damage_from.map((elt) => (
                                        <p key={elt.name}>{elt.name}</p>
                                    ))}
                                    <p>half damage</p>
                                    {elt.damage_relations.half_damage_from.map((elt) => (
                                        <p key={elt.name}>{elt.name}</p>
                                    ))}
                                </article>
                            </article>
                        </section>
                        <article>
                            <h4>Pokemons</h4>
                            <TypesList pokemon={elt.pokemon} />
                        </article>

                    </div>
                )
            })}
        </div >
    );
}

export default TypeDetailPage;