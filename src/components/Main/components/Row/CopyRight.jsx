import { useContext } from "react";
import { AppContext } from "../../../AppContext/AppContext";
function CopyRight() {
  const { copyRight } = useContext(AppContext);
  return <h1>{copyRight}</h1>;
}

export default CopyRight;
