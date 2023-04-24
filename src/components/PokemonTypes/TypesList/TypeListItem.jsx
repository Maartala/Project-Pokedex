// NICHT MEHR EINGEBUNDEN!!!



// import style from './TypeListItem.module.scss';
// import React from 'react';
// import { useNavigate } from 'react-router-dom';



// const TypeListItem = ({ props, formatId }) => {

//     const navigate = useNavigate()

//     const handleClick = (id, navigate) => {

//         fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(navigate);

//                 navigate(`/pokemon/${id}`, { state: data })
//             })
//     }

//     return (
//         <div className={style.typeListItem}>
//             <button onClick={() => { handleClick(props.id, navigate) }}>
//                 <img src={props.sprites.front_default} alt={props.name} />
//                 <p>#{formatId(props.id)} {props.name}</p>
//             </button>
//         </div>
//     );
// }

// export default TypeListItem;