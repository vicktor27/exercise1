import { useState } from "react";
import "./Footer.css";

function Footer() {
  const [x1, setX1] = useState("START VALUE");

  return (
    <footer>
      <h1>Componente de React con Estado: {x1}</h1>
    </footer>
  );
}

export default Footer;
