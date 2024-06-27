import React, { useState } from "react";
import { Link } from "react-router-dom";
import peterPFP from '../assets/PFP.png';
import group from '../assets/group.png';
import addEvents from '../assets/addEvents.png';
import questionMark from '../assets/questionMark.png';
import otherOptions from '../assets/otherOptions.png';
import Modal from '../Modal';


const HomePage: React.FC = () => {
  const homePageStyle: React.CSSProperties = {
    backgroundColor: "#FFF",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const titleStyle: React.CSSProperties = {
    color: "#68D8D6",
    fontFamily: "inter, sans-serif",
    fontSize: "55px",
    position: "fixed",
    top: "0",
    paddingTop: "30px",
    textShadow: '0 5px 8px rgba(0, 0, 0, 0.2)',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    ':hover': {
    cursor: 'pointer',
  },
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

  const addCircle: React.CSSProperties = {
    backgroundImage: `url(${addEvents})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '70px',
    height: '70px',
    position: 'fixed',
    top: '260px',
    left: '725px',
    borderRadius: '40px',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
    padding: '0',
    margin: '0',
    backgroundColor: 'white'
  };

  const bottomRectStyle: React.CSSProperties = {
    left: '350px',
    width: '210px',
    height: '50px',
    background: 'linear-gradient(to right, #68D8D6, #ABEBDF)',
    position: 'fixed',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  };

  const groupOne: React.CSSProperties = {
    position: 'fixed',
    display: 'flex',
    top: '350px',
    left: '350px',
    width: '260px',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const groupOneStyle: React.CSSProperties = {
    position: 'absolute',
    fontFamily: 'Inter, sans-serif',
    color: 'white',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginLeft: '40px',
    marginBottom: '30px'
  };

  const rectangleStyle: React.CSSProperties = {
    backgroundColor: 'lightgrey',
    position: 'fixed',
    top: '350px',
    left: '350px',
    width: '260px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #68D8D6, #B4FFF6)',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow to the rectangle
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    textShadow: '1px 1px 2px black',
    textAlign: 'center',
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

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div style={homePageStyle}>
      <div style={{ ...verticalLine, left: '260px'}}></div>
      <div style={{ ...verticalLine, right: '260px'}}></div>
      <div style={horizontalLeftLine}></div>
      <button style={titleStyle}>Divvy</button>
      <img src={questionMark} alt="questionMark" style={{ top: '0', right: '110px', position: 'absolute', padding: '50px', height: '60px'}}></img>
      <img src={otherOptions} alt="options" style={{ top: '0', right: '0', position: 'fixed', padding: '50px', height: '60px'}}/>
      <img src={peterPFP} alt="Profile" style={{ top: '0', left: '0', position: 'fixed', padding: '40px' }}/>
      
      <h2 style={usernameStyle}> Peter Le</h2>
      
      <div style={groupOne}>
        <div style={rectangle}></div>
        <div style={bottomRectStyle}></div>
        <p style={groupOneStyle}> Group 1</p>
      </div>
      <img src={group} onClick={() => setIsOpen(true)} style={{ top: '160px', left: '315px', position: 'fixed', padding: '50px', height: '140px', width: '180px'}}/>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Group 1
      </Modal>
      <div style={additionalRectangle}>
      <button style={addCircle}> </button>
      </div>
    </div>
  )
}

export default HomePage