import React from 'react';
import { useState } from 'react';
import InputName from "../InputName"
import styled from 'styled-components';
import Button from "../Button"
import { Link } from 'react-router-dom';

function FormCad() {
    
    const [idade, setIdade] = useState('');

    const newIdade = (e) => {
        setIdade(e.target.value);
    }

  return (
    <>
    <Form action="#" method='post' autoComplete='on' autoCapitalize='on' >
        <h1>Crie uma conta</h1>
        <div className="name" style={{display: 'flex'}}>

            <label htmlFor="iname"/>
            <InputName 
            type='text'
            placeholder='Nome'
            required/>

            <label htmlFor="isobremone"/>
            <InputName 
            type='text' 
            placeholder='Sobrenome'
            required/>

        </div>
        <div className="cpf">
            
            <label htmlFor="icpf"/>
            <InputName 
            type='text' 
            placeholder='CPF' 
            min={11} 
            required />

        </div>
        <div className="age">
            
            <label htmlFor="iage"/>
            <InputName 
            type='date' 
            onChange={newIdade} required />
            {idade}

        </div>
        <div className="email">

            <label htmlFor="iemail"/>
            <InputName 
            type='email' 
            placeholder='Email' 
            required/>

        </div>
        <div className="password">

            <label htmlFor="ipassword"/>
            <InputName type='password' placeholder='Password' required/>

        </div>
        <div className="btn">
            <Button style={{width:"100%", height:"40px", fontSize: "1.3rem"}}>
                Criar conta
            </Button>
        </div>
        <div className="back" style={{display: 'flex', justifyContent: "center", padding: "5px 0 0 0 ",}}>
            <Link to="/login">
                Já possui login ?
            </Link>
        </div>
    </Form>
    </>    
  )
}

export default FormCad;

const Form = styled.form`
width:400px;
padding: 20px;
border-radius: 5px;
display: flex;
flex-direction: column;
gap:.2rem;
background-color: #F0F2F5;
 a {
    text-decoration: none;
    color: #4360FF;
 }
 &a:hover{
    text-decoration: underline;
 }
`