import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/industries" element={<Home />} />
          <Route path="/cases" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
