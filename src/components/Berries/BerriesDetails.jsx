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
                    <h4>Category: </h4>
                    <p>{json2.category.name}</p>
                </div>
                <hr />
                <div>
                    <h4>Size: </h4>
                    <p>{json.size}</p>
                </div>
                <div>
                    <h4>Growth time: </h4>
                    <p>{json.growth_time}</p>
                </div>
                <div>
                    <h4>Max harvest: </h4>
                    <p>{json.max_harvest}</p>
                </div>
                <hr />
                <div>
                    <h4>Firmness: </h4>
                    <p>{json.firmness.name}</p>
                </div>
                <div>
                    <h4>Smoothness: </h4>
                    <p>{json.smoothness}</p>
                </div>
                <div>
                    <h4>Soil dryness: </h4>
                    <p>{json.soil_dryness}</p>
                </div>
                <hr />
                <div>
                    <h4>Natural gift power: </h4>
                    <p>{json.natural_gift_power}</p>
                </div>
                <div>
                    <h4>Natural gift type: </h4>
                    <p>{json.natural_gift_type.name}</p>
                </div>
                <hr />
                <div>
                    <h4>Health:</h4>
                </div>
                <div>
                    <p>{healthText}</p>
                </div>
                <Link to="/berries">Back</Link>
            </article>

        </section >
    );
}

export default BerriesDetails;