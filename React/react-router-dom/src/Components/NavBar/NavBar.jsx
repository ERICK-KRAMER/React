import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
export function NavBar() {
    return(
        <>
            <ul className={style.nav_bar_home}>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
          </ul>
        </>
    )
}