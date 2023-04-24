import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './BerriesItem.module.scss'

import { useContext } from "react";
import { ThemeContext } from "../../App";

const BerriesItem = (props) => {

    const isDarkModeEnabled = useContext(ThemeContext);
    const classArray = [style.berryItem, isDarkModeEnabled ? style.dark : style.light];

    const secondFetch = props.url
    const [berriesDetails, setBerriesDetails] = useState()
    const [id, setId] = useState()
    const [pic, setPic] = useState()

    const berryName = props.name[0].toUpperCase() + props.name.slice(1)


    useEffect(() => {
        fetch(secondFetch)
            .then(response => response.json())
            .then(json => {
                // console.log(json);
                setId(json.id)
                setBerriesDetails(json)

                fetch(json.item.url)
                    .then(response => response.json())
                    .then(json => {
                        // console.log(json.sprites.default);
                        setPic(json.sprites.default)
                    })
            })
    }, [])

    return (
        <div className={classArray.join(" ")}>
            <article>
                <h2>{berryName}</h2>
                <img src={pic} alt={berryName} />
            </article>
            <div>
                <Link to={`/berries/${id}`} state={berriesDetails}>More details</Link>
            </div>
        </div>
    );
}

export default BerriesItem;