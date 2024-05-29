import { Link } from "react-router-dom";

export default function NavBar({ src, alt, title, link1, link1Name, link2, link2Name }) {
  return (
    <>
      <div className="nav">
        <div className="navLogoAndTitleDiv">
          <Link to="/">
            <img className="homeBtnLogo" src={src} alt={alt} />
          </Link>
          <h1>{title}</h1>
        </div>
        <div className="navBarLinksDiv">
          <Link to={link1}>{link1Name}</Link>
          <Link to={link2}>{link2Name}</Link>
        </div>
      </div>
    </>
  );
}
