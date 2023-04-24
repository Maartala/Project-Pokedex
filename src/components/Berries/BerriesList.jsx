import { useEffect, useState } from "react";
import BerriesItem from "./BerriesItem";
import style from './BerriesList.module.scss'

const BerriesList = () => {

    const [berries, setBerries] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/berry`)
            .then(response => response.json())
            .then(json => {
                setBerries(json.results)
            });
    }, [])
    // console.log(berries);
    return (
        <div className={style.berriesList}>
            {berries.map((element, index) => {
                return (
                    <BerriesItem
                        key={index}
                        name={element.name}
                        url={element.url}
                    />
                )
            })}

        </div>
    );
}

export default BerriesList;