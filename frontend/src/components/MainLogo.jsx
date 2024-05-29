import React from "react";

function MainLogo({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} className="logo"/>
    </div>
  );
}

export default MainLogo;
