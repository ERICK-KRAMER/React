import React, { useState } from 'react';
import axios from 'axios';
import Style from './github.module.css'

function Github() {
  const [name, setName] = useState('');
  const [userData, setUserData] = useState(null);
  const [imageProfile, setImageProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  async function handleClick() {
    try {
      const userResponse = await axios.get(`https://api.github.com/users/${name}`);
      const reposResponse = await axios.get(userResponse.data.repos_url);
      setUserData(userResponse.data);
      setImageProfile(userResponse.data.avatar_url);
      setRepos(reposResponse.data);
      setName('');
    } catch (error) {
      console.log(error.message);
      setName('');
    }
  }
  

  return (
    <div className={Style.constainer_box_Github}>
      <div>
        <input type="text" onChange={handleName} className={Style.input_name_username} />
        <button onClick={handleClick} className={Style.btn_input}>Enviar</button>
        {userData && (
          <div className={Style.wrapper_user}>
            <h2>Nome de usuário: {userData.login}</h2>
            <img src={imageProfile} alt={userData.login} />
            <p>Repositórios:</p>
            <ul>
              {repos.map((repo) => (
                <li key={repo.id}>{repo.full_name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Github;
