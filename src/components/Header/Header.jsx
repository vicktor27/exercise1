import logo from "../../images/logo-mexico.jpeg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Magical Mexico Logo" />
      <h1>México Magico</h1>
    </header>
  );
}

export default Header;
