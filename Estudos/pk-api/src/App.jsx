import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then(Response => {
      const sortedArray = [...Response.data.results];
      sortedArray.sort((a,b) => {
        // console.log({a});
        // console.log({b});

        return a.name.localeCompare(b.name);
        
      });
      
      setList(sortedArray)})
  },[]);

  return (
    <>
      <h3>Desafio Fernandez</h3>  
      <h1>Consumir api pokemom</h1>
      <hr />
      {list.map((item) => (
        <Pokemom key={item.name} data={item} />
      ))}
    </>
  )
}

const Pokemom = ({data}) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    //charmander
    axios
    .get(data.url)
    .then(Response => {setDetails(Response.data)})
  },[])

  if(details === null){
    return <div>=</div>;
  };

  return <div style={{display: "flex", justifyContent:"center",alignItems: "center",flexDirection: "column-reverse"}}>

          <span><b>{details.name}</b> - EXP {details.base_experience}</span>;
          <span><img src={details.sprites.front_default} style={{width: "200px"}}/></span>

        </div>
};


export default App;