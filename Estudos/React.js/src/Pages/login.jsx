import React, { useState } from 'react'
import Modal from '../Components/Modal';
import styled from 'styled-components'


const login = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <Body>
      <div>
        <h1>Front Beginings</h1>
      </div>
      <button onClick={() => setOpenModal(true)}>Abrir Modal</button>
      <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
        <h1>erick kramer</h1>
      </Modal>
    </Body>
  );
};

const Body = styled.body`
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;

  button{
    width:130px;
    height:36px;
    border: none;
    border-radius: 7px;
    
  }
`

export default login;