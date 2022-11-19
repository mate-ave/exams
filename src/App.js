import './App.css';
import { Routes, Route } from 'react-router-dom';
import Materia from './components/Materia';
import ListaParcialesMateria from "./components/ListaParcialesMateria";
import Parcial from './components/Parcial';


function App() {
  return (
    <Routes>
      <Route path=":materia" element={<Materia />}>
        <Route path="parciales" element={<ListaParcialesMateria/>}/>
        <Route path="parcial/:id" element={<Parcial/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
