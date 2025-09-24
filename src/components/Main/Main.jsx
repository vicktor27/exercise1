import Jumbotron from "./Jumbotron";
function Main({ otroNombre }) {
  return (
    <>
      <h1>COMPARTIENDO ESTADO{otroNombre}</h1>
      <p>Victor Manuel Solis Carodoza</p>;
      <Jumbotron texto={otroNombre} />
    </>
  );
}

export default Main;
