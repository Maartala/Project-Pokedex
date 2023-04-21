import { useLocation } from 'react-router-dom'
import style from './BerriesDetails.module.css'
import { Link } from 'react-router-dom'

const BerriesDetails = () => {

    const location = useLocation()
    console.log(location);

    const berryName = location.state.name[0].toUpperCase() + location.state.name.slice(1)

    return (
        <section className={style.berriesDetails}>
            <h2>{berryName}</h2>
            <article>
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
            </article>
            <Link to="/berries">Back</Link>
        </section >
    );
}

export default BerriesDetails;