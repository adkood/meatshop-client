import React from 'react';

const VerticalTextContainer = ({ width, height, color = 'white', bgColor = 'lightskyblue', fontSize = '1rem', text = "" }) => {
  return (
    <div style={{ width: `${width}`, height: `${height}`, color: `${color}`, backgroundColor: `${bgColor}`, fontSize: `${fontSize}`, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {text.split('').map((char, index) => (
        <div key={index} style={{ fontSize: `${fontSize}%`, fontWeight: "bold", marginBottom: "5px" }}>
          {char}
        </div>
      ))}
    </div>
  );
};

export default VerticalTextContainer;
