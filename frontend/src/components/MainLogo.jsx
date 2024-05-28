import React from "react";

function MainLogo({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} height="200px"/>
    </div>
  );
}

export default MainLogo;
