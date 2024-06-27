import React, { useState } from 'react';

const modalStyle = {
  width: '50vw',
  height: '200px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
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
  fontSize: '22px'
};

const closeButtonHover: React.CSSProperties = {   
  ...closeButton,
  backgroundColor: 'red',
};


export default function Modal({ open, children, onClose }: { open: boolean, children: React.ReactNode, onClose: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  if (!open) return null
  return (
    <>
    <div style={overlayStyle} />
    <div style={modalStyle}>
      <button style={isHovered ? closeButtonHover : closeButton}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onClose}>X</button> 
      {children}
    </div>
    </>
  )
}
