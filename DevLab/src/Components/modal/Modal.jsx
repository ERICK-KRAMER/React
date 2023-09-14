import React, { useState } from 'react';
import Style from './Modal.module.css';
import Logo from '../LogoStyle';
import InputName from '../InputName';
import Button from '../Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Modal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erroLogin, setErrorLogin] = useState('');

  const getUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/usuarios');
      console.log(response.data);
      const users = response.data;
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        console.log('todo ok');
        setErrorLogin('');
      } else {
        setErrorLogin('Algo deu errado!');
      }
    } catch (error) {
      setErrorLogin('Algo deu errado!');
      console.error(error);
    }
  };

  function handleClick(e) {
    e.preventDefault();
    getUser();
    setEmail('');
    setPassword('');
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    setErrorLogin('');
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setErrorLogin('');
  }

  return (
    <div className={Style.modal}>
      <Logo color='#4360FF' />
      <form action='#' method='post'>
        <label htmlFor='email'></label>
        <InputName
          type='email'
          placeholder='Usuario ou email'
          onBlur={handleEmail}
        />
        <label htmlFor='password'></label>
        <InputName
          type='password'
          placeholder='Senha'
          onBlur={handlePassword}
        />
        {erroLogin && <span style={{ color: 'red' }}>{erroLogin}</span>}
        <Link to='/'>
          <small>Esqueceu a senha?</small>
        </Link>
        <Button style={{ width: '100%' }} onClick={handleClick}>
          Logar
        </Button>
        <Link to="/Create_Accout"><small>Criar uma conta</small></Link>
      </form>
    </div>
  );
};

export default Modal;
