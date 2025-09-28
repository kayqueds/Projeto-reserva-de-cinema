import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RotasSite from "./routes/RotasSite";
import Navigation from "./components/common/Navigation/Navigation";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <header>
            <Navigation />
          </header>
          <main>
            <RotasSite />
          </main>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
