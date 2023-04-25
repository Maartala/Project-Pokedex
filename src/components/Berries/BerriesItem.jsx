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


                fetch(json.item.url)
                    .then(response => response.json())
                    .then(json2 => {
                        // console.log(json);
                        setPic(json2.sprites.default)

                        // Übergeben von beide json der fetches
                        setBerriesDetails({ json, json2 })
                        // console.log({ json, json2 });
                    })
            })
    }, [])

    return (
        <section className={classArray.join(" ")}>
            <div>
                <h2>{berryName}</h2>
            </div>
            <article>
                <Link to={`/berries/${id}`} state={berriesDetails}  ><img src={pic} alt={berryName} /></Link>
            </article>
        </section>
    );
}

export default BerriesItem;