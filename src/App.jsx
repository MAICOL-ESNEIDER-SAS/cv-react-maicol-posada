import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";

import {
  datosPersonales,
  perfilProfesional,
  experiencias,
  estudios,
  tecnologias
} from "./cvData";

import "./App.css";

function App() {
  return (
    <div className="contenedor-cv">
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={perfilProfesional} />

      <Experiencia lista={experiencias} />

      <Educacion lista={estudios} />

      <StackTecnologias lista={tecnologias} />
    </div>
  );
}

export default App;

      
