import "./Main.css";
import Section from "./components/Section/Section";
import Row from "./components/Row/Row";
function Main() {
  return (
    <main>
      <p>Estamos dentro del componente Main.</p>
      <Section>
        <Row />
        <Row />
        <Row />
      </Section>
    </main>
  );
}

export default Main;
