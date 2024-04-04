import { Link } from "react-router-dom";
import logo from "./img/logo.jpg";

const Header = () => {
  return (
    <header>
      <div className="logoplace">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo-Marvel" />
        </Link>
      </div>
      <div className="btn-header">
        <Link to={"/comics"}>
          <button className="btn-comics">Comics</button>
        </Link>
        <Link to={"/characters"}>
          <button className="btn-characters">Characters</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
