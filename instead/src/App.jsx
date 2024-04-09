import {  Routes, Route } from 'react-router-dom';
import './App.css'
import Index from './views/Main/index';
import Home from './views/home/Home';
import Services from './views/Services/services';
import Proyectos from './views/Proyectos/Proyectos'
import Contacto from './views/Contacto/Contacto';
function App() {
  return (


    <Routes>
          <Route path="/home"  element={<Index/>} />
          <Route path="/"  element={<Home/>} />
          <Route path="/Services"  element={<Services/>} />
          <Route path="/Proyectos"  element={<Proyectos/>} />
          <Route path="/Contacto"  element={<Contacto/>} />
    </Routes>


 
  )
}

export default App
