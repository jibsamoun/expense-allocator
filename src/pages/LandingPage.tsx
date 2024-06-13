import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  const landingPageStyle: React.CSSProperties = {
    backgroundColor: "#68D8D6",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const titleStyle: React.CSSProperties = {
    color: "white",
    fontFamily: "inter",
    fontSize: "96px",
  };

  const linkContainerStyle: React.CSSProperties = {
    marginBottom: "80px",
    marginTop: '10px',
  };

  const loginLinkStyle: React.CSSProperties = {
    color: "white",
    fontFamily: "inter",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const inputContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.1rem 0',
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: 'inter',
    fontSize: '20px',
    textAlign: 'center',
    borderRadius: '25px',
    border: 'none',
    color: 'rgba(0, 0, 0, 0.4',
  };

  const signUpLinkStyle: React.CSSProperties = {
    color: "white",
    fontFamily: "inter",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div style={landingPageStyle}>
      <h1 style={titleStyle}>Divvy</h1>
      <div style={inputContainerStyle}>
        <input type="text" placeholder="Username" style={inputStyle}/>
      </div>
      <div style={inputContainerStyle}>
        <input type="text" placeholder="Password" style={inputStyle}/>
      </div>
      <div style={linkContainerStyle}>
        <Link to="/login" style={loginLinkStyle}>
          Login
        </Link>
      </div>
      <div>
        <Link to="/signup" style={signUpLinkStyle}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
