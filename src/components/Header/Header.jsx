import "./Header.css";

function Header({ companyName }) {
  return (
    <>
      <header className="header">
        <h1 className="header__title">{companyName}</h1>
      </header>
    </>
  );
}

export default Header;
