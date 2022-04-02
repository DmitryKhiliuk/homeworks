import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.burgerMenu}>
            <input type="checkbox" id={s.menuToggle}/>
            <label htmlFor={s.menuToggle} className={s.menuBtn}>
                <span/>
            </label>
            <div className={s.nav}>
                <NavLink to={PATH.PRE_JUNIOR} className={el => el.isActive ? `${s.active} ${s.item}` : s.item}>Недоджун</NavLink>
                <NavLink to={PATH.JUNIOR} className={el => el.isActive ? `${s.active} ${s.item}` : s.item}>Джун</NavLink>
                <NavLink to={PATH.POST_JUNIOR} className={el => el.isActive ? `${s.active} ${s.item}` : s.item}>Сверхджун</NavLink>
                <NavLink to={'/*'} className={el => el.isActive ? `${s.active} ${s.item}` : s.item}>Сеньор</NavLink>
            </div>
        </div>
    )
}

export default Header

