import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./componentes/Header"
import Home from './vistas/Home';
import Login from './vistas/Login';
import Registro from './vistas/Registro';
import NouTicket from './vistas/NouTicket';

function App() {

  return (
    <Router>
      
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/nuevoTicket" element={<NouTicket />} />
      </Routes>
    </Router>
  )
}

export default App
