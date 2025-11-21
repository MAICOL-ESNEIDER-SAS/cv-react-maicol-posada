import StackTecnologias from "./components/StackTecnologias";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import "./App.css";

function App() {
  return (
    <div className="contenedor-cv">
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
      <StackTecnologias />
    </div>
  );
}

export default App;
