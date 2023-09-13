// Hooks & Api
import { useEffect, useState } from "react";
import axios from 'axios';

// Components
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Button from "../Components/Button";
import InputName from "../Components/InputName";
import Div from "../Components/BodyStyled";
import Nav_bar from "../Components/Nav_bar";
import Form from "../Components/form";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erroLogin, setErrorLogin] = useState('');

    const getUser = async () => {
        try {
            const response = await axios.get('http://localhost:3000/usuarios');
            console.log(response.data)
            const users = response.data;
            const user = users.find(user => user.email === email && user.password === password);

            if (user) {
                console.log("tudo certo!");
                setErrorLogin('');
            }
            else {
                setErrorLogin('Erro ao fazer login');
                console.log(erroLogin);
            }

        } catch (error) {
            setErrorLogin('Erro ao fazer login');
            console.log(setErrorLogin, error);
        }
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrorLogin('')
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        getUser();
        setEmail('');
        setPassword('');
    };

    return (
        <>
        <Nav_bar />
        <Div>
            <H1>Login</H1>
            <Form action="#" method="post">

                <label htmlFor={email}></label>
                <InputName 
                type="email" 
                placeholder="Usuario ou Email" 
                autoComplete="on" 
                value={email} 
                onChange={handleEmail} />

                <label htmlFor={password}></label>
                <InputName 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={handlePassword} />

                <Button 
                type="submit" 
                style={{ width: "100%", height: "40px" }} 
                onClick={handleClick}
                >Entrar
                </Button>

                {erroLogin && (
                    <small style={{color:"red", textAlign:"start",width:"98%"}}
                      >{erroLogin}
                    </small>
                )};

                <Link 
                to="/" 
                style={{ textDecoration: "none", color: "#1877F2" }}
                >Esqueceu a senha?
                </Link>

                <hr style={{ width: "330px", height: "1px" }} />

                <Link to="/Create_Accout" style={{width: "450px", paddingLeft: "150px"}}>
                <Button 
                >Criar Uma Conta
                </Button>
                </Link>

            </Form>
        </Div>
        </>
    );
};

export default Login;

const H1 = styled.h1`
margin: 10px;
font-size: 4rem;

`

