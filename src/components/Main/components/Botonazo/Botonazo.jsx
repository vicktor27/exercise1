import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
function Botonazo() {
  const { setCopyRight } = useContext(AppContext);
  return (
    <button
      onClick={() => {
        setCopyRight("EL NUEVO VALOR EL NUEVO DUEÑO");
      }}
    >
      Click Para Actualizar
    </button>
  );
}

export default Botonazo;
