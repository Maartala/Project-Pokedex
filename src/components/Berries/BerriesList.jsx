import { useEffect, useState, useContext } from "react";
import BerriesItem from "./BerriesItem";
import style from './BerriesList.module.scss'
import { FilterContext } from "../../pages/mainPage/MainPage.jsx";

const BerriesList = () => {

    const [berries, setBerries] = useState([])
    const filter = useContext(FilterContext)

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
                if (element.name.includes(filter))
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