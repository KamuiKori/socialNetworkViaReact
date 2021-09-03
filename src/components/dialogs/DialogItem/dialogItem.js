import React from 'react'
import style from '../dialogs.module.css'
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <img src={`${props.avatar}`} alt="avatar"/>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem