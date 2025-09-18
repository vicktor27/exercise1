import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { useState } from "react";

function App() {
  let name = "PhD Victor M Solis Cardoza";
  const [companyName, setCompanyName] = useState("Rowan Networks");
  return (
    <>
      <Header companyName={companyName} />
      <Main />
      <Footer companyName={companyName} setCompanyName={setCompanyName} />
    </>
  );
}

export default App;
