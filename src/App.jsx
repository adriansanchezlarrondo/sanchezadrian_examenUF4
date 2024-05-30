import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/Header"
import Home from './vistas/Home';
import Ranking from './vistas/Ranking';

function App() {

  return (
    <Router>
      
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  )
}

export default App
