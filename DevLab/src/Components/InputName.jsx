import { styled } from "styled-components";

const InputName = styled.input`
width:100%;
height:40px;
border-radius: 5px;
padding:10px;
outline: none;
border: none;
border: 1px solid #0000006f;
font-size: 1.2rem;

&:focus {
    border: 1px solid #1877F2;
}
`
export default InputName;
