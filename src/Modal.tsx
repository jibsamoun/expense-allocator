import React, { useState } from 'react';
import Modal from 'react-modal';

const modalStyle: React.CSSProperties = {
  width: '70vw',
  height: '80vh',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  fontFamily: 'Inter, sans-serif',
  fontSize: '20px',
  fontWeight: '700'
};


const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0, .7)',
  zIndex: 1000,
};

const closeButton: React.CSSProperties = {
  border: 'none',
  position: 'absolute', 
  top: '0',
  left: '0',
  width: '30px',
  height: '30px',
  cursor: 'pointer',
  transition: 'background-color 0.3s', 
  fontSize: '22px',
  background: 'none'
};

const closeButtonHover: React.CSSProperties = {   
  ...closeButton,
  backgroundColor: 'red',
};

const rectangle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  width: '70vw',
  height: '70vh',
  backgroundColor: '#D9D9D9',
  position: 'fixed',
  top: '50%',
  left: '50%',
  borderRadius: '30px',
  transform: 'translate(-50%, -50%)',
};

const inputContainerStyle: React.CSSProperties = {
  width: '100%',
  flexDirection: "column",
  margin: "0.1rem 0",
  bottom: '10px',
  height: '60px',
};

const inputStyle: React.CSSProperties = {
  position: 'fixed',
  marginTop: '20px',
  height: '40px',
  width: '100%',
  fontFamily: "inter, sans-serif",
  fontSize: "20px",
  textAlign: "center",
  borderRadius: "25px",
  border: "none",
  color: "black",
  outline: "none",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
};

export default function ModalComponent({ open, children, onClose, onRequestClose }: { open: boolean, children: React.ReactNode, onClose: () => void, onRequestClose: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  if (!open) return null;

  return (
    <Modal
      isOpen={open}
      onRequestClose={onRequestClose}
      style={{
        overlay: overlayStyle,
        content: modalStyle
      }}
    >
      <button
        style={isHovered ? closeButtonHover : closeButton}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClose}
      >
        X
      </button>
      {children}
      <div style={rectangle}>
        <div style={inputContainerStyle}>
          <input type="text" placeholder="Aa" style={inputStyle} />
        </div>
      </div>
    </Modal>
  );
}
