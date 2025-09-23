import Header from "./components/Header/Header";
import Footer from "./Footer";
import MyName from "./MyName";
import { useState } from "react";

function App() {
  let name = "PhD Victor M Solis Cardoza";
  const [x1, setX1] = useState("START VALUE");
  return (
    <>
      <Header />
      <MyName />
      <Footer setX1={setX1} />
    </>
  );
}

export default App;
