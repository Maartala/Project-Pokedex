import { useEffect, useState } from "react";

const BerriesList = () => {

    const [berries, setBerries] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/berry`)
            .then(response => response.json())
            .then(json => {
                setPokemon(json.results)
                // console.log(json.results)
                // console.log(json);
            });
    }, [])

    return (
        <section>

        </section>
    );
}

export default BerriesList;