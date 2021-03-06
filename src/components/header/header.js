import React from 'react'
import logo from '../../img/logo.png'
import style from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" className='logo'/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login:
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}
export default Header