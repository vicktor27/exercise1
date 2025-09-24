import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyName from "./components/Main/Main";
import Background from "./components/Background/Background";
import { AppContext } from "./components/Context/AppContext";
import { use, useState } from "react";
import "./App.css";

function App() {
  let name = "PhD Victor M Solis Cardoza";
  const [x1, setX1] = useState("START VALUE");
  const [c1, setC1] = useState("Rowan Networks");
  const [copyright, setCopyright] = useState("Derechos Reservados UTLD");

  return (
    <>
      <AppContext.Provider value={{ c1, setC1, copyright, setCopyright }}>
        <Header setX1={setX1} />
        <Background>
          <MyName otroNombre={x1} />
          <Footer setX1={setX1} x1={x1} />
        </Background>

        <h1>ESTO ESTA EN APP {x1}</h1>
        <h1>{c1}</h1>
      </AppContext.Provider>
    </>
  );
}

export default App;
