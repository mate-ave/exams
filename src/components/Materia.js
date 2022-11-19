import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import {nombreMateria} from "../utils/materias";

const Materia = () => {
  const { materia } = useParams();
  useEffect(() => {document.title = nombreMateria(materia)}, []);
  return (<>
    <header>
      <nav>
        <div>
          <span className='nombreMateria'>{nombreMateria(materia)}</span>
        </div>
      </nav>
    </header>
    <main>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <Outlet/>
    </main>
    <footer>
      <div>
        <span>&copy; {new Date().getFullYear()} mateave</span>
      </div>
    </footer>
  </>);
};

export default Materia;