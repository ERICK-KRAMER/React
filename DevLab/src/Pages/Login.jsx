import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../Components/Button";
import InputName from "../Components/InputName";
import Div from "../Components/BodyStyled"
import Nav_bar from "../Components/Nav_bar";
import { BiCodeAlt } from "react-icons/bi"
import { useEffect } from "react";
import axios from 'axios'



const Login = () => {

    const getUser = async () =>{
        try {
            const responser = await axios.get('http://localhost:3000/usuarios')
            console.log(responser.data)
        } catch (error) {
            console.log()
        }
    };

    useEffect(() => {
        getUser();
    });


    return(
        <>
        <Nav_bar />

        <Div>

        <div className="image"><Img /></div>

        <h1 style={{margin: "10px", fontSize: "4rem"}}>Login</h1>

        <Form action="#" method="post">

            <div className="Input" style={{width: "370px", padding: "0 10px"}} >
                <label htmlFor="iemail"></label>
                <InputName type="email" placeholder="Usuario ou Email" autoComplete="on"/>
            </div>

            <div className="Input" style={{width: "370px", padding: "0 10px"}} >
                <label htmlFor="ipassword"></label>
                <InputName type="password" placeholder="Password"/>
            </div>

            <div className="btn" style={{width: "370px", padding: "0 10px",}}>
                <Button type="submit" style={{width: "100%", height: "40px"}}>Entrar</Button>
            </div>


            <Link to="/" style={{textDecoration: "none", color: "#1877F2", }}>Esqueceu a senha?</Link>

            <hr style={{ width: "330px", height: "1px"}} />

            <div className="create_accout" style={{width: "370px", padding: "0 10px"}}>
                <Link to='/Create_Accout' style={{width: "100%", height: "40px", display: "flex", justifyContent: "center", textDecoration: "none"}}>
                    <Button type="submit" style={{width: "50%", height: "40px"}}>Criar Uma Conta</Button></Link>
            </div>

        </Form>
        </Div>
        </>
    );
};
export default Login;



const Form = styled.form`
background-color: #ffff;
color: white;
width:370px;
height: 280px;
display:flex;
justify-content: center;
flex-direction: column;
gap: .8rem;
align-items: center;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
margin-bottom: 150px;
`

const Img = styled(BiCodeAlt)`
width: 200px;
height: 200px;
color: #4360FF;
`