/* import { useState } from 'react'
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import CSS
import "./App.css";
import "./assets/css/header.css";
import "./assets/css/home.css";
import "./assets/css/comics.css";
import "./assets/css/characters.css";

// Pages
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Home from "./pages/Home";

// Components
import Header from "./Components/Header";

function App() {
  /* const [count, setCount] = useState(0); */

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </Router>
  );
}

export default App;
