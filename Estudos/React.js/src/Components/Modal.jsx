import React from 'react';
import { RiCloseFill } from 'react-icons/ri';

function Modal({ isOpen, children, setModalOpen }) { 
  if (isOpen) {
    return (
      <div style={CONTAINER}>
        <div style={MODAL_STYLE}>
          <div><RiCloseFill style={MODAL_ICON} onClick={setModalOpen} /></div>
          <div>{children}</div>
        </div>
      </div>
    );
  }
  return null;
}

const MODAL_ICON = {
  position: 'fixed',
  top: '15px', 
  right: '20px', 
  width: '32px',
  height: '32px',
  cursor: 'pointer',
};

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%', 
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  background: '#fefefe',
  width: "50%",
  height: '30%',
  borderRadius: '10px',
  color: 'black',
  display: 'flex',
  alingItens: 'center',
  justifyContent: 'center',
};

const CONTAINER = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: '1000',
};

export default Modal;
