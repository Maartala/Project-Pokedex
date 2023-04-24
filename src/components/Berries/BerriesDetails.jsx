import { useLocation } from 'react-router-dom'
import style from './BerriesDetails.module.scss'
import { Link } from 'react-router-dom'

import { useContext } from "react";
import { ThemeContext } from "../../App";

const BerriesDetails = () => {

    const isDarkModeEnabled = useContext(ThemeContext);
    const classArray = [style.berriesDetails, isDarkModeEnabled ? style.dark : style.light];

    const location = useLocation()
    console.log(location);

    // location hat 2 json, daher abspeichern in je einer Konstante nötig!
    const json = location.state.json
    const json2 = location.state.json2

    console.log(json2);

    const berryName = json.name[0].toUpperCase() + json.name.slice(1)
    const healthText = json2.effect_entries[0].short_effect.slice(5)
    console.log(healthText);

    return (
        <section className={classArray.join(" ")}>
            <h2>{berryName}</h2>
            <article>
                <div>
                    <p>Category: </p>
                    <p>{json2.category.name}</p>
                </div>
                <hr />
                <div>
                    <p>Size: </p>
                    <p>{json.size}</p>
                </div>
                <div>
                    <p>Growth time: </p>
                    <p>{json.growth_time}</p>
                </div>
                <div>
                    <p>Max harvest: </p>
                    <p>{json.max_harvest}</p>
                </div>
                <hr />
                <div>
                    <p>Firmness: </p>
                    <p>{json.firmness.name}</p>
                </div>
                <div>
                    <p>Smoothness: </p>
                    <p>{json.smoothness}</p>
                </div>
                <div>
                    <p>Soil dryness: </p>
                    <p>{json.soil_dryness}</p>
                </div>
                <hr />
                <div>
                    <p>Natural gift power: </p>
                    <p>{json.natural_gift_power}</p>
                </div>
                <div>
                    <p>Natural gift type: </p>
                    <p>{json.natural_gift_type.name}</p>
                </div>
                <hr />
                <div>
                    <p>Health:</p>
                </div>
                <div>
                    <p>{healthText}</p>
                </div>
            </article>
            <Link to="/berries">Back</Link>
        </section >
    );
}

export default BerriesDetails;