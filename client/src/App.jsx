import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;