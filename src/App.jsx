import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyName from "./components/Main/Main";
import { useState } from "react";
import "./App.css";

function App() {
  let name = "PhD Victor M Solis Cardoza";
  const [x1, setX1] = useState("START VALUE");
  return (
    <>
      <Header setX1={setX1} />
      <MyName otroNombre={x1} />
      <Footer setX1={setX1} x1={x1} />

      <h1>ESTO ESTA EN APP {x1}</h1>
    </>
  );
}

export default App;
