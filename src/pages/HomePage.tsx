import React, { useState } from "react";
import { Link } from "react-router-dom";
import peterPFP from '../assets/PFP.png';
import lines from '../assets/horizontal-lines.png';
import group from '../assets/group.png';


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
    fontSize: "45px",
    position: "fixed",
    top: "0",
    paddingTop: "60px"
  };

  const usernameStyle: React.CSSProperties = {
    color: "#68D8D6",
    fontFamily: 'Inter, sans-serif',
    fontSize: "25px",
    position: "fixed",
    left: '40px',
    top: '120px',
    marginLeft: '0'
  };

  const rectangle: React.CSSProperties = {
    width: '260px',
    height: '200px',
    backgroundColor: 'lightgrey',
    position: 'fixed',
    top: '200px',
    left: '350px',
    borderRadius: '30px'
  };

  const bottomRectStyle: React.CSSProperties = {
    width: '260px',
    height: '50px',
    background: 'linear-gradient(to right, #68D8D6, #B4FFF6)',
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




  return (
    <div style={homePageStyle}>
      <h1 style={titleStyle}>Divvy</h1>
      <img src={lines} alt="sideBar" style={{ top: '0', right: ' 0', position: 'fixed', padding: '50px', height: '60px'}}/>
      <img src={peterPFP} alt="Profile" style={{ top: '0', left: '0', position: 'fixed', padding: '50px' }}/>
      <h2 style={usernameStyle}> Peter Le</h2>
      {/* <div style={rectangleStyle}>
        Group 1 
      </div> */}
      <div style={groupOne}>
        <div style={rectangle}></div>
        <div style={bottomRectStyle}></div>
        <p style={groupOneStyle}> Group 1</p>
      </div>
      <img src={group} style={{ top: '160px', left: '315px', position: 'fixed', padding: '50px', height: '140px', width: '230px'}}/>
      {/* <div style={groupOne}>
        <div style={bottomRectStyle}></div>
        <p style={groupOneStyle}> Group 1</p>
      </div> */}
    </div>
  )
}

export default HomePage