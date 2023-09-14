import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./LogoStyle";
import Modal from "./modal/Modal";

const Nav_bar = () => {

    const [openModal, steOpenModal] = useState(false);

    function handleClick() {
        steOpenModal(!openModal)
    };
    

    return(

        <Nav >
            
            <h1 
            style={{padding:"3rem", display: "flex",alignItems:"center",}}>
                <Logo style={{color: "#4360FF"}}/>
                <span>DevLab</span>
            </h1>    
            
            <ul 
            style={{listStyle: "none", display: "flex", gap: "1.5rem", padding: "0 3rem", textDecoration: "none"}}>

                <Div>
                    <Link 
                    to="/" 
                    style={{textDecoration: "none", fontSize: "1.2rem", color: "black", fontWeight: "500" }}
                    >Home
                    </Link>
                </Div>

                <Div>
                    <Link 
                    onClick={handleClick}
                    style={{textDecoration: "none", fontSize: "1.2rem", color: "black"}}>Login
                    </Link>
                    <div>{openModal && <Modal />}</div>
                </Div>

            </ul>
            
        </Nav>
    );
};

export default Nav_bar;

const Nav = styled.nav`
background-color: #ffff;
width:100%;
height: 70px;
display:flex;
justify-content: space-between;
align-items: center
`

const Div = styled.div`
width: 70px;
height: 30px;
text-align:center;
padding: 4px;
border-bottom: 1px solid #0076C6;
`
