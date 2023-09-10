import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cep = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [cepInput, setCepInput] = useState(''); // Estado para armazenar o valor do campo de entrada

  const getCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cepInput}/json/`);
      setData(response.data);
      setError(null); // Limpar qualquer erro anterior
    } catch (error) {
      console.log(error);
      setData(null); // Limpar os dados em caso de erro
      setError('Erro ao buscar o CEP. Certifique-se de que o CEP é válido.');
    }
  };

  const handleButtonClick = () => {
    if (cepInput.trim() !== '') {
      getCep();
      setCepInput('');
    }
  };

  return (
    <div>
      <h1>API de CEP</h1>
      <input style={{width:"200px", height:"40px", border:"none",borderRadius:"10px", padding:"10px", outline:"none"}}
        type="text"
        placeholder="Digite o CEP"
        value={cepInput}
        onChange={(e) => setCepInput(e.target.value)}
      /> <br/>
      <button onClick={handleButtonClick}>Buscar CEP</button>
      {error ? (
        <p>{error}</p>
      ) : data ? (
        <div>
          <p>Lagradouro: {data.logradouro}</p>
          <p>Bairro: {data.bairro}</p>
          <p>Localidade: {data.localidade}</p>
          <p>Uf: {data.uf}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Cep;
