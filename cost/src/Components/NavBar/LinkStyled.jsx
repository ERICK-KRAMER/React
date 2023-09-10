import { Link } from "react-router-dom";
import styled from 'styled-components'

const LinkStyled = styled(Link)`
text-decoration: none;
color: #fda501;
  &:hover{
    color: ${(props) => props.Color  ? props.Color : ''};
    text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
  }
`
export default LinkStyled;