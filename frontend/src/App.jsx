import "./css/App.css";

import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/MovieContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
