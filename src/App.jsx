import { useState } from "react";

import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import Habilidades from "./components/Habilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  // Estado para mostrar/ocultar habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  // Estado del stack de tecnologías
  const [tecnologias, setTecnologias] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Vite",
    "Figma",
    "Firebase",
  ]);

  // Función para agregar tecnologías desde el formulario
  const agregarTecnologia = (tec) => {
    setTecnologias([...tecnologias, tec]);
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

      {/* Stack de tecnologías dinámico */}
      <StackTecnologias tecnologias={tecnologias} />

      {/* Formulario para agregar nuevas tecnologías */}
      <FormularioTecnologia onAgregar={agregarTecnologia} />

      {/* Botón para mostrar/ocultar habilidades */}
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


      
