import Header from "./components/Header/Header";
import { AppContext } from "./components/Context/AppContext";
import "./App.css";

function App() {
  return (
    <>
      <AppContext.Provider>
        <div class="app">
          <Header />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
