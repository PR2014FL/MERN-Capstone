import React from "react";
import { Link } from "react-router-dom";
import "../Pages.css";

export default function Breaths({src, alt}) {
  return (
    <div className="body">
      <Link to="/">
        <img src={src} alt={alt} height="100px" />
      </Link>
      <h2>This is the Breaths Page</h2>
    </div>
  );
}
