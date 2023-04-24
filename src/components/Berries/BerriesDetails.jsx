import { useLocation } from 'react-router-dom'
import style from './BerriesDetails.module.scss'
import { Link } from 'react-router-dom'

import { useContext } from "react";
import { ThemeContext } from "../../App";

const BerriesDetails = () => {

    const isDarkModeEnabled = useContext(ThemeContext);
    const classArray = [style.berriesDetails, isDarkModeEnabled ? style.dark : style.light];

    const location = useLocation()
    // console.log(location);

    const berryName = location.state.name[0].toUpperCase() + location.state.name.slice(1)

    return (
        <section className={classArray.join(" ")}>
            <h2>{berryName}</h2>
            <article>
                <div>
                    <p>Firmness: </p>
                    <p>{location.state.firmness.name}</p>
                </div>
                <div>
                    <p>Size: </p>
                    <p>{location.state.size}</p>
                </div>
                <div>
                    <p>Smoothness: </p>
                    <p>{location.state.smoothness}</p>
                </div>
                <div>
                    <p>Soil dryness: </p>
                    <p>{location.state.soil_dryness}</p>
                </div>
                <div>
                    <p>Growth time: </p>
                    <p>{location.state.growth_time}</p>
                </div>
                <div>
                    <p>Max harvest: </p>
                    <p>{location.state.max_harvest}</p>
                </div>
                <hr />
                <div>
                    <p>Natural gift power: </p>
                    <p>{location.state.natural_gift_power}</p>
                </div>
                <div>
                    <p>Natural gift type: </p>
                    <p>{location.state.natural_gift_type.name}</p>
                </div>
            </article>
            <Link to="/berries">Back</Link>
        </section >
    );
}

export default BerriesDetails;