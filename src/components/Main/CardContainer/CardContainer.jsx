import Card from "./Card/Card";
import "./CardContainer.css";

//por que no leer la API aqui??
const CardContainer = (props) => {
  const { cards, handleDeleteCard, handleUpdateCard } = props;

  console.log("dentro de Container" + cards);
  return (
    <div className="card-container">
      <ul className="card-container__list">
        {cards.map((card) => (
          <Card
            card={card}
            handleDeleteCard={handleDeleteCard}
            handleUpdateCard={handleUpdateCard}
          />
        ))}
      </ul>
      ;
    </div>
  );
};

export default CardContainer;
