import { styled } from "styled-components";

const Div = styled.div`
    background: #F0F2F5;
    background-image: url(${(props) => props.img});
    background-position: center, top ;
    background-size:cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    flex: 1 1  ;
`
export default Div;