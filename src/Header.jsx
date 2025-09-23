function Header() {
  return (
    <header>
      <h1>Titulo Header</h1>
      <button
        onClick={() => {
          setX1("EL NUEVO VALOR");
        }}
      ></button>
    </header>
  );
}

export default Header;
