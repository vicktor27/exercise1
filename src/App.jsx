import Header from "./components/Header/Header";
import { AppContext } from "./components/Context/AppContext";
import "./App.css";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./dataProvider/Api";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]); //en esta variable, vamos a almacenar la información

  console.log("ESTO ES POR QUE YA SE MONTO EL COMPONENTE");

  useEffect(() => {
    (async () => {
      await api
        .getAllCards()
        .then((data) => {
          setCards(data); //esta almacen los datos en cards
        })
        .catch((error) => {
          console.error("Failed to fetch cards: " + error);
        });
    })();
  }, []);

  async function handleDeleteCard(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        const newArray = cards.filter(
          (currentCard) => currentCard._id !== card._id
        );
        setCards(newArray);
      })
      .catch((error) => console.error(error));
  }

  async function handleUpdateCard(card) {
    const likeinvertido = !card.like; //invertir el valor
    console.log(likeinvertido);
    await api
      .updateCard(card._id, likeinvertido)
      .then(() => {
        //card.like = !card.like
        const temp = { ...card, like: likeinvertido };
        console.log(temp);

        //const cartemporal = [{}, {}, {}];
        setCards((prev) => {
          return prev.map((element) => {
            return element._id === temp._id ? temp : element;
          });
        });
      }) //guardo en la API
      //NOS FALTA ESTO. THEN; POR ESO DEBES ACTUALIZAR LA PAGINA MANUA
      .catch((error) => console.error(error));
  }

  console.log(cards);
  return (
    <>
      <AppContext.Provider>
        <div className="app">
          <div className="app__content">
            <Header />
            <Main
              cards={cards}
              handleDeleteCard={handleDeleteCard}
              handleUpdateCard={handleUpdateCard}
            />
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
