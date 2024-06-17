import React from 'react';

const Rectangle = () => {
  const rectangleStyle: React.CSSProperties = {
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


  return <div className={rectangleStyle}></div>;
};

export default Rectangle;