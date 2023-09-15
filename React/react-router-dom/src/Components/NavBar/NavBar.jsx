import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'
export function NavBar() {
    return(
        <>
          <nav>
              <ul className={style.nav_bar_home}>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Posts'>Posts</Link>
                <Link to='/Posts/10'>Posts 10</Link>
              </ul>
          </nav>
        </>
    )
}