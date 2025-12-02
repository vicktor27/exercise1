import "./Main.css";
<<<<<<< HEAD
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
=======
import Profile from "./Profile/Profile";
import CardContainer from "./CardContainer/CardContainer";
import Card from "./CardContainer/Card/Card";
const Main = (props) => {
  const { cards, handleDeleteCard, handleUpdateCard } = props;
  return (
    <main className="main">
      <section className="traveler">
        <Profile />
      </section>
      <section className="gallery">
        <CardContainer
          cards={cards}
          handleDeleteCard={handleDeleteCard}
          handleUpdateCard={handleUpdateCard}
        />
      </section>
>>>>>>> unit3
    </main>
  );
};

export default Main;
