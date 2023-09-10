import React from 'react'
import LinkStyled from './Styled-Components/LinkNav';
import "../Styles/Header.modules.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
        <div className="logo">
            <Link to="/" style={{textDecoration: "none", color: "#ffff", fontSize: "2.2rem"}}>Estudos De React.Js</Link>
        </div>
        <ul style={{display:"flex",gap:"2rem", listStyle: "none", justifyContent:"center", padding:"1rem"}}>
            <LinkStyled to="/styled-components" >Styled Components</LinkStyled>
            <LinkStyled to="/react-icons" >React Icons</LinkStyled>
            <LinkStyled to="/Hooks" >Hooks</LinkStyled>
            <LinkStyled to="/Apis" >API's</LinkStyled>
        </ul>
    </header>
  )
}

export default NavBar;