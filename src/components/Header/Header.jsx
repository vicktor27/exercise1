import "./Header.css";

function Header({ setX1 }) {
  return (
    <header className="header">
      <h1>Titulo Header</h1>
      <button
        onClick={() => {
          setX1("EL NUEVO VALOR DESDE HEADER");
        }}
      >
        CLICK DEL HEADER
      </button>
    </header>
  );
}

export default Header;
