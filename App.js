
import './App.css';
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Bar from './pages/Bar';
import About from './pages/About';
import submit from './pages/submit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Bar/>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
