import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import questionMark from '../assets/questionMark.png';
import otherOptions from '../assets/otherOptions.png';
import peterPFP from '../assets/PFP.png';

const GroupchatPage: React.FC = () => {
  const navigate = useNavigate();

  const takeToHome = () => {
    navigate('/HomePage');
  };

  const pageStyle: React.CSSProperties = {
    backgroundColor: "#FFF",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  const usernameStyle: React.CSSProperties = {
    color: "black",
    fontFamily: 'Inter, sans-serif',
    fontSize: "30px",
    position: "fixed",
    left: '60px',
    top: '120px',
    marginLeft: '0'
  };

  const rectangle: React.CSSProperties = {
    width: '210px',
    height: '200px',
    backgroundColor: '#D9D9D9',
    position: 'fixed',
    top: '200px',
    left: '350px',
    borderRadius: '30px'
  };

  const additionalRectangle: React.CSSProperties = {
    width: '210px',
    height: '200px',
    position: 'fixed',
    top: '200px',
    left: '660px',
    borderRadius: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
  };

  const verticalLine: React.CSSProperties = {
    position: 'absolute',
    width: '2px',
    minHeight: '100vh',
    backgroundColor: 'black',
    background: 'linear-gradient(to bottom, transparent, black, transparent)',
  };

  const horizontalLeftLine: React.CSSProperties = {
    position: 'absolute',
    top: '200px',
    left: '0px',
    width: '260px',
    minHeight: '2px',
    backgroundColor: 'black',
    background: 'linear-gradient(to right, transparent, black)',
  };
  

  return (
    <div style={pageStyle}>
      <img src={questionMark} alt="questionMark" style={{ top: '0', right: '110px', position: 'fixed', padding: '50px', height: '60px'}}></img>
      <img src={otherOptions} alt="options" onClick={takeToHome} style={{ top: '0', right: '0', position: 'fixed', padding: '50px', height: '60px'}}/>
      <img src={peterPFP} alt="Profile" style={{ top: '0', left: '0', position: 'fixed', padding: '40px' }}/>
      
      <h2 style={usernameStyle}> Peter Le</h2>
      
      <div style={{ ...verticalLine, left: '260px'}}></div>
      <div style={{ ...verticalLine, right: '260px'}}></div>
      <div style={horizontalLeftLine}></div>
    </div>
  )
};

export default GroupchatPage;
