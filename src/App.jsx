import { useState } from "react";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";

import ToggleHabilidades from "./components/ToggleHabilidades";
import Habilidades from "./components/Habilidades";

function App() {
  // Estado para mostrar/ocultar habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  // Función para cambiar el estado
  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <div className="contenedor-cv">
      <CabeceraCV />

      {/* Perfil profesional */}
      <Perfil />

      {/* Experiencia laboral */}
      <Experiencia />

      {/* Formación académica */}
      <Educacion />

      {/* Stack de tecnologías */}
      <StackTecnologias />

      {/* Botón de mostrar/ocultar habilidades */}
      <ToggleHabilidades 
        mostrar={mostrarHabilidades} 
        onToggle={toggleHabilidades} 
      />

      {/* Renderizado condicional de habilidades */}
      {mostrarHabilidades && <Habilidades />}
    </div>
  );
}

export default App;

      
