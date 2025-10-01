import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import RotasSite from "./routes/RotasSite";
import Navigation from "./components/common/Navigation/Navigation";
import Loading from "./pages/loading/Loading";
import Footer from "./components/common/footer/Footer";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && (
        <Loading 
          duration={3000} 
          onLoadingComplete={handleLoadingComplete} 
        />
      )}
      <BrowserRouter>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <RotasSite />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
