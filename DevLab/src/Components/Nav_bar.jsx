
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./LogoStyle";


const Nav_bar = () => {
    return(
        <>
        <Nav>
            
            <h1 style={{padding:"3rem", display: "flex", justifyContent:"center",alignItems:"center", gap: ".5rem"}}><Logo style={{color: "#4360FF"}}/><span>DevLab</span></h1>
                
                <div className="links">

                    <ul style={{listStyle: "none", display: "flex", gap: "1.5rem", padding: "0 3rem", textDecoration: "none"}}>

                        <Div>
                            <li><Link to="/" style={{textDecoration: "none", fontSize: "1.2rem", color: "black", fontWeight: "500" }}>Home</Link></li>
                        </Div>

                        <Div>
                            <li><Link to="/Login" style={{textDecoration: "none", fontSize: "1.2rem", color: "black", fontWeight: "500" }}>Login</Link></li>
                        </Div>
    
                    </ul>
                
                </div>
        </Nav>
        </>
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
border-radius: 5px;
border: 1px solid #000000;
&:active {
    border: 1px solid #0076C6;
}
`
