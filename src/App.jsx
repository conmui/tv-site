import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="App__nav">
          <ul className="App__nav-list">
            <li className="App__nav-item">
              <Link to="/">About</Link>
            </li>
            <li className="App__nav-item">
              <Link to="/characters">Characters</Link>
            </li>
            <li className="App__nav-item">
              <Link to="/episodes">Episodes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
