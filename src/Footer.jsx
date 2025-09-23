function Footer() {
  let nombre = "Tambien es una variable";
  nombre = "Otro valor";
  //x1 = "Otro valor". //ESTO SERIA UN ERROR POR QUE ES UNA CONSTANTE

  //x1 es una variable de estado

  return (
    <footer>
      <h1>Componente de React con Estado: {x1}</h1>
      <p>El nombre= {nombre}</p>
      <button
        onClick={() => {
          setX1("EL NUEVO VALOR");
          nombre = "Valeria Hernandez";
        }}
      >
        Actualizar el Estado
      </button>
    </footer>
  );
}

export default Footer;
