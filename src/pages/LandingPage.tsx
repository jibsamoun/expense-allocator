import React, { useState } from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  const landingPageStyle: React.CSSProperties = {
    backgroundColor: "#68D8D6",
    height: "100vh", // 100% of viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  const titleStyle: React.CSSProperties = {
    color: "white",
    fontFamily: "inter, sans-serif",
    fontSize: "96px",
  };

  const linkContainerStyle: React.CSSProperties = {
    marginBottom: "80px",
    marginTop: "10px",
  };

  // Base styling of the login/sign up link buttons
  const linkStyle: React.CSSProperties = {
    color: "white",
    fontFamily: "inter, sans-serif",
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    textShadow: "2px 2px 12px rgba(0, 0, 0, 0.2)", // horizontal, vertical, blur radius, color
  };

  /**
   * useState hooks used to handle active and hover styling of buttons.
   * loginHover & loginActive are boolean values set to false.
   */
  const [loginHover, setLoginHover] = useState(false);
  const [loginActive, setLoginActive] = useState(false);

  const [signUpHover, setSignupHover] = useState(false);
  const [signUpActive, setSignupActive] = useState(false);

  /**
   * Event handlers: funcion that handles what happens during various events
   * @returns new boolean state after given action
   */
  const handleLoginMouseEnter = () => setLoginHover(true); // if mouse hovers over login button -> set login hover status to true
  const handleLoginMouseLeave = () => setLoginHover(false); // if mouse leaves login button -> set login hover status to false
  const handleLoginMouseDown = () => setLoginActive(true); // if mouse clicks on login button -> set login active status to true
  const handleLoginMouseUp = () => setLoginActive(false); // if mouse unclicks login button -> set login active status to false

  const handleSignupMouseEnter = () => setSignupHover(true); // same logic as above
  const handleSignupMouseLeave = () => setSignupHover(false);
  const handleSignupMouseDown = () => setSignupActive(true);
  const handleSignupMouseUp = () => setSignupActive(false);

  const loginLinkStyle = {
    ...linkStyle, // imports base styling of the linkStyle
    // logic used to restyle based on different events
    color: loginActive ? "#ffd000" : loginHover ? "#ffea00" : "white",
    // if loginActive is true -> set color
    // if loginActive is false, but loginHover is true -> set other color
    // if loginActive and loginHover are false -> set to white
  };

  const signUpLinkStyle = {
    ...linkStyle,
    color: signUpActive ? "#ffd000" : signUpHover ? "#ffea00" : "white",
    // same logic as above
  };

  const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: "0.1rem 0",
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "inter, sans-serif",
    fontSize: "20px",
    textAlign: "center",
    borderRadius: "25px",
    border: "none",
    color: "black",
    outline: "none",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
    marginBottom: "8px",
  };

  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
      <div style={landingPageStyle}>
        <h1 style={titleStyle}>Divvy</h1>
        <div style={inputContainerStyle}>
          <input type="text" placeholder="Username" style={inputStyle} />
        </div>
        <div style={inputContainerStyle}>
          <input type="text" placeholder="Password" style={inputStyle} />
        </div>
        <div style={linkContainerStyle}>
          <Link
            to="/login"
            style={loginLinkStyle}
            onMouseEnter={handleLoginMouseEnter} // when mouse cursor hovers over login
            onMouseLeave={handleLoginMouseLeave} // when mouse cursor leaves login
            onMouseDown={handleLoginMouseDown} // when mouse cursor clicks on login
            onMouseUp={handleLoginMouseUp} // when mouse cursor unclicks login
          >
            Login
          </Link>
        </div>
        <div>
          <Link
            to="/signup"
            style={signUpLinkStyle}
            onMouseEnter={handleSignupMouseEnter}
            onMouseLeave={handleSignupMouseLeave}
            onMouseDown={handleSignupMouseDown}
            onMouseUp={handleSignupMouseUp}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
