import React, { useState } from "react";
import { Link } from "react-router-dom";
import peterPFP from '../assets/PFP.png';


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
    fontFamily: "inter",
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


  return (
    <div style={homePageStyle}>
      <h1 style={titleStyle}>Divvy</h1>
      <img src={peterPFP} alt="Profile" style={{ top: '0', left: '0', position: 'fixed', padding: '50px' }}/>
      <h2 style={usernameStyle}> Peter Le</h2>


    </div>
  )
}

export default HomePage