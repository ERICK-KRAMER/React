import React, { useState, useEffect } from 'react'
import axios from 'axios';
import style from './Nasa.module.css'
const Nasa = () => {

    // minha key = AfSgwXjvWKs2X7jcoOSGdnmz5ow9KDaRRhRSIyg4 
    //  https://api.nasa.gov/planetary/apod?api_key=AfSgwXjvWKs2X7jcoOSGdnmz5ow9KDaRRhRSIyg4

    const [dados , setDados] = useState([]);
    const [getError, setGetError] = useState(false);
    const [planet, setPlanet] = useState([]);

    async function handleClick() {
        try {
            const Response = await axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=AfSgwXjvWKs2X7jcoOSGdnmz5ow9KDaRRhRSIyg4')
            console.log(Response.data.photos);
            setDados(Response.data.photos);
            setGetError('');
        } catch (error) {
            setGetError('Algo deu errado, Tente novamente 🙂👍', error);
            console.log(getError);
        };
    };

    async function HandlePlanet() {
        try {
            const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=AfSgwXjvWKs2X7jcoOSGdnmz5ow9KDaRRhRSIyg4')
            console.log(response.data);
            setPlanet(response.data);
            setGetError('')
        } catch (error) {
            setGetError('Algo deu errado, Tente novamente 🙂👍', error);
            console.log(getError);
        }

    }
    

    return (
    <div className={style.btn_nasa}>
        <button onClick={handleClick}>Mars Rover</button>
        <button onClick={HandlePlanet}>Planetas</button>
        
        {getError && (
            <span style={{color: "red"}}>{getError}</span>
        )}
        {planet && (
            <>
            <h1>{planet.explanation}</h1>
            <img src={planet.hdurl} alt={planet.copyright} />
            </>
        )}
        {dados.map((photo) => (
                <>
                <h1 style={{textAlign:"center"}}>{photo.camera.full_name}</h1>
                <ul>
                    <img key={photo.id} src={photo.img_src} alt={photo.camera.full_name} />    
                </ul>
                </>
            ))}
    </div>
  );
};

export default Nasa;