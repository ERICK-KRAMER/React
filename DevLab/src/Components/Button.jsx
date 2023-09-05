import { styled } from "styled-components";

const Button = styled.button`
width: 100px;
height: 30px;
border: none;
outline: none;
border-radius: 4px;
color: #ffff;
background-color: #4360FF;

&:active{
    background-color: #364ccc;
}
`
export default Button;