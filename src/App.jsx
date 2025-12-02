
// src/App.jsx
import { useState } from "react";
import "./index.css";
import {
  datosPersonales,
  perfilProfesional,
  experiencias,
  estudios,
  habilidades,
  tecnologias,
} from "./cvData";

import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Educacion from "./components/Educacion.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import Habilidades from "./components/Habilidades.jsx";

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);
  const toggleHabilidades = () => setMostrarHabilidades((prev) => !prev);

  return (
    <div className="cv-root">
      {/* Fondo futurista */}
      <div className="cv-bg-gradient" />

      <div className="cv-container glass-card">
        <header className="cv-header">
          <CabeceraCV
            nombre={datosPersonales.nombre}
            cargo={datosPersonales.cargo}
            ciudad={datosPersonales.ciudad}
            contacto={datosPersonales.contacto}
          />
        </header>

        <main className="cv-main">
          <section className="cv-section perfil">
            <Perfil resumen={perfilProfesional} habilidades={habilidades} />
          </section>

          <section className="cv-grid">
            <div className="cv-section experiencia">
              <Experiencia experiencias={experiencias} />
            </div>
            <div className="cv-section educacion">
              <Educacion estudios={estudios} />
            </div>
          </section>

          <section className="cv-section tecnologias">
            <StackTecnologias tecnologias={tecnologias} />
          </section>

          <section className="cv-section habilidades-toggle">
            <ToggleHabilidades
              mostrar={mostrarHabilidades}
              onToggle={toggleHabilidades}
            />
            {mostrarHabilidades && (
              <div className="cv-section inner">
                <Habilidades habilidades={habilidades} />
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;






      
