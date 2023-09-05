import { styled } from "styled-components";
import { FaInstagram, } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const NavStyle = styled.nav`
display: flex;
gap: 1rem;

`
import React from 'react'

function NavFooter() {
  return (
    <NavStyle>
        <div className="Intagram"><FaInstagram style={{width: "64px", height: "32px"}}/></div>
        <div className="Github"><FaGithub style={{width: "64px", height: "32px"}}/></div>
        <div className="Youtube"><FaYoutube style={{width: "64px", height: "32px"}}/></div>
    </NavStyle>
  )
}
export default NavFooter;
