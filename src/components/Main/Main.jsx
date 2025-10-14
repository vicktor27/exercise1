import "./Main.css";
import Section from "./components/Section/Section";
import Row from "./components/Row/Row";
import Botonazo from "./components/Botonazo/Botonazo";

function Main() {
  return (
    <main>
      <p>Estamos dentro del componente Main.</p>
      <Section>
        <Row />
        <Row />
        <Row />
      </Section>

      <Botonazo />
    </main>
  );
}

export default Main;
