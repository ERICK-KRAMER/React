import styled from "styled-components"
import { Link } from "react-router-dom";

const LinkStyled = styled(Link)`
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
border-radius: 7px;
padding: 1px;
font-size: large;
font-weight: 500;
width: 130px;
height: 45px;
color: #1b17f7ce;
background-color: ${(Props) => Props.backgroundColor ? Props.backgroundColor : "lightgray"}
`
export default LinkStyled;