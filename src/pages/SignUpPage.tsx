import React, { useState } from "react";

const SignUpPage: React.FC = () => {
  const signUpPageStyle: React.CSSProperties = {
    backgroundColor: "white",
    height: "100vh", // 100% of viewport height
    display: "flex", // flexbox layout for element
    flexDirection: "column", // sets direction of flex's container's main axis to be vertical. Child elements stacked vertically
    justifyContent: "center", // aligns flex container's children along main axis (vertical). Centers them in the middle vertically
    alignItems: "center", // aligns children
  };

  const titleStyle: React.CSSProperties = {
    color: "#68D8D6",
    fontFamily: "inter, sans-serif",
    fontSize: "96px",
  };

  const signUpContainerStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "25px",
    boxShadow: "-2px 4px 10px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "500px",
    height: "450px",
    marginTop: "-40px",
  };

  const signUpContainerText: React.CSSProperties = {
    fontFamily: "inter, sans-serif",
    fontSize: "28px",
    textAlign: "center",
    borderBottom: "0.1px solid grey",
    marginBottom: "20px",
    paddingBottom: "20px", // add some space between the text and the line
    width: "100%",
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "inter, sans-serif",
    textAlign: "center",
    fontSize: "24px",
    borderRadius: "50px",
    width: "90%",
    height: "17%",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
    marginBottom: "18px",
    marginTop: "18px",
  };

  const signUpButtonStyle: React.CSSProperties = {
    fontFamily: "inter, sans-serif",
    borderRadius: "50px",
    width: "45%",
    height: "15%",
    marginTop: "12px",
    marginBottom: "12px",
    backgroundColor: "#68D8D6",
    border: "none",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
  };

  const [signUpHover, setSignupHover] = useState(false);
  const [signUpActive, setSignupActive] = useState(false);

  const handleSignupMouseEnter = () => setSignupHover(true); // same logic as above
  const handleSignupMouseLeave = () => setSignupHover(false);
  const handleSignupMouseDown = () => setSignupActive(true);
  const handleSignupMouseUp = () => setSignupActive(false);

  const signUpButtonDynamicStyle = {
    ...signUpButtonStyle,
    backgroundColor: signUpActive
      ? "#07beb8"
      : signUpHover
      ? "#9ceaef"
      : "#68D8D6",
  };

  return (
    <>
      {/**
       * style block inserted directly into the HTML document within a React component.
       * This approach is useful for applying global styles directly from within the component.
       */}
      <style>
        {` //enclosed w/ backticks, indicating a template literal in JS. CSS rules will be converted to a string and injected in to the document
          html, body {
            margin: 0; //removes default margins applied by browswer to html and body elements
            padding: 0; //removes default padding applied by browser to html and body elements
            width: 100%; //ensures html and body elements take up full width of viewport
            height: 100%; //ensures html and body elements take up full height of viewport
          }
        `}
      </style>
      <div style={signUpPageStyle}>
        <h1 style={titleStyle}>Divvy</h1>
        <div style={signUpContainerStyle}>
          <h1 style={signUpContainerText}>Create a new account</h1>
          <input type="text" placeholder="New Username" style={inputStyle} />
          <input type="text" placeholder="New Password" style={inputStyle} />
          <button
            style={signUpButtonDynamicStyle}
            onMouseEnter={handleSignupMouseEnter}
            onMouseLeave={handleSignupMouseLeave}
            onMouseDown={handleSignupMouseDown}
            onMouseUp={handleSignupMouseUp}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
