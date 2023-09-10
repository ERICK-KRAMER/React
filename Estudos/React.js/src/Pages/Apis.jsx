import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cep from '../Components/api/Cep';

const Apis = () => {
  const [list, setList] = useState([]);

  const getPost = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      // console.log(response.data);
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h1>Consumindo API com Axios</h1>
      <h3>api JSON pleaceholder!</h3>
      <hr />
      {list.length === 0 ? ( <p>Carregando...</p> ) : ( list.map( (user) => (
          <div className='name' key={user.name}>
            <h2> Nome: <span style={{color: "red"}}>{user.name}</span>, Email: <span style={{color:"red"}}>{user.email}</span> </h2>
          </div>
        ))
      )}
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "#e2dfdf", textAlign:'center', fontWeight:"500", fontSize:"1.3em", padding:"1rem", flexDirection:"column"}}>
        <Cep />
      </div>
    </>
  );
};

export default Apis;
