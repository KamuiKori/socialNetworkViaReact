import React from 'react'
import style from './MenuFriendItem.module.css'

const MenuFriendItem = (props) => {
    return (
        <div>
            <img src={props.avatar} alt="ava"/>
            <div>
                <span className={style.nameSpan}>{props.name}</span>
            </div>
        </div>
    )
}
export default MenuFriendItem