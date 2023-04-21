import style from './TypeDetailPage.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../App';

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

    const isDarkModeEnabled = useContext(ThemeContext)
    console.log(isDarkModeEnabled);
    const classArray = [style.typeDetail, isDarkModeEnabled ? style.dark : style.light];

    return (
        <div className={classArray.join(" ")}>
            <h2>{`Name: ${typeName.id}`}</h2>
            {typeDetails.map((elt) => {
                return (
                    <div key={elt.name}>
                        <article>
                            <p>damage to:</p>
                            {/* <p>{elt.damage_relations.half_damage_to[0].name} {elt.damage_relations.half_damage_to[1].name}</p> */}
                            {elt.damage_relations.half_damage_to.map((elt) => (
                                <p key={elt.name}>{elt.name}</p>
                            ))}
                            {elt.damage_relations.double_damage_to.map((elt) => (
                                <p key={elt.name}>{elt.name}</p>
                            ))}
                        </article>

                        <p>damage from:</p>
                        {elt.damage_relations.half_damage_from.map((elt) => (
                            <p key={elt.name}>{elt.name}</p>
                        ))}
                        {elt.damage_relations.double_damage_from.map((elt) => (
                            <p key={elt.name}>{elt.name}</p>
                        ))}
                    </div>
                )
            })}
        </div >
    );
}

export default TypeDetailPage;