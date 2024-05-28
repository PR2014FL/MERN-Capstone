import { Link } from "react-router-dom";

export default function Button({to, label}) {
  return (
    <div>
      <Link to={to}>
        <button className="btn2">{label}</button>
      </Link>
    </div>
  );
}
