import React from 'react'

//Compoents
import LinkStyled from "./LinkStyled"
import Header from './header';
import List from './List';

const NavBar = (underline) => {

  return (

    <Header>
        <LinkStyled to="/">
            <h1>Logo</h1>
        </LinkStyled>
        <List>
            <LinkStyled 
                to="/newproject"  
                underline={underline} 
                >Novo Projeto
            </LinkStyled>

            <LinkStyled 
                to="/company"  
                underline={underline}
                >Empresa
            </LinkStyled>

            <LinkStyled 
                to="contact"
                underline={underline}
                >Contato
            </LinkStyled>
        </List>
    </Header>

  )
}

export default NavBar;