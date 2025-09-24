function Footer({ setX1, x1 }) {
  let nombre = "Tambien es una variable";
  nombre = "Otro valor";

  return (
    <footer>
      <h1>Componente de React con Estado: {x1}</h1>
      <p>El nombre= {nombre}</p>
      <button
        onClick={() => {
          setX1("Valeria Herandez Lucia Fernandez");
          nombre = "Valeria Hernandez";
        }}
      >
        Actualizar el Estado
      </button>
    </footer>
  );
}

export default Footer;
