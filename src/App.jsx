import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { useState } from "react";
import { AppContext } from "./components/AppContext/AppContext";

function App() {
  let name = "PhD Victor M Solis Cardoza";
  const [companyName, setCompanyName] = useState("Rowan Networks");
  const [copyRight, setCopyRight] = useState("Derechos Reservados UTLD");
  return (
    <AppContext.Provider value={{ copyRight, setCopyRight }}>
      <>
        <Header companyName={companyName} />
        <Main />
        <Footer companyName={companyName} setCompanyName={setCompanyName} />
      </>
    </AppContext.Provider>
  );
}

export default App;
