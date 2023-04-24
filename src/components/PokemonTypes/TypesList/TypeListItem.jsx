import style from './TypeListItem.module.scss';
import React from 'react';


const TypeListItem = ({ props, formatId }) => {
    return (
        <div className={style.typeListItem}>
            <img src={props.sprites.front_default} alt={props.name} />
            <p>#{formatId(props.id)} {props.name}</p>
        </div>
    );
}

export default TypeListItem;