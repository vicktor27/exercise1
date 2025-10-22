import Header from "./components/Header/Header";
import { AppContext } from "./components/Context/AppContext";
import "./App.css";

function App() {
  return (
    <>
      <AppContext.Provider>
        <div className="app">
          <div className="app__wraper ">
            <Header />
          </div>
        </div>
      </AppContext.Provider>
    </>
  );
}
z;
export default App;
