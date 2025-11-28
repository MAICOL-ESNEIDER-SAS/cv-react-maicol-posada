import { useState } from "react";

import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Educacion from "./components/Educacion.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import Habilidades from "./components/Habilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";

function App() {
  // ----------------------------
  // DATOS DEL PERFIL
  // ----------------------------
  const datosPerfil = {
    resumen:
      "Soy un aprendiz apasionado por el desarrollo de software, con interés en la programación front-end, React y buenas prácticas de diseño. Me gusta aprender rápido, trabajar en equipo y crear interfaces claras y funcionales.",
    habilidades: [
      "Responsable",
      "Trabajo en equipo",
      "Comunicación efectiva",
      "Aprendizaje continuo",
    ],
  };

  // ----------------------------
  // EXPERIENCIA LABORAL
  // ----------------------------
  const experiencias = [
    {
      cargo: "Desarrollador Front-End",
      empresa: "TechNova",
      año: "2024",
      descripcion:
        "Construcción de interfaces y componentes reutilizables usando React.",
    },
    {
      cargo: "Diseñador Web",
      empresa: "StudioWeb",
      año: "2023",
      descripcion: "Maquetación de páginas con HTML, CSS y diseño responsivo.",
    },
    {
      cargo: "Soporte Técnico",
      empresa: "Helpsys",
      año: "2022",
      descripcion:
        "Atención a usuarios, solución de fallos y mantenimiento de equipos.",
    },
    {
      cargo: "Aprendiz ADSO",
      empresa: "SENA",
      año: "2024",
      descripcion:
        "Desarrollo de proyectos formativos utilizando JavaScript y React.",
    },
    {
      cargo: "Freelancer – Landing Pages",
      empresa: "Clientes independientes",
      año: "2023",
      descripcion: "Diseño y construcción de páginas promocionales.",
    },
    {
      cargo: "Diseñador UI",
      empresa: "Look&Feel",
      año: "2023",
      descripcion: "Creación de prototipos y optimización de interfaces.",
    },
    {
      cargo: "Auxiliar Administrativo",
      empresa: "Soluciones Rápidas",
      año: "2021",
      descripcion:
        "Gestión de datos, manejo documental y soporte operativo general.",
    },
    {
      cargo: "Proyecto Personal – Tienda Online",
      empresa: "Independiente",
      año: "2024",
      descripcion:
        "Construcción de una tienda virtual con React y Firebase.",
    },
    {
      cargo: "Proyecto Personal – CV React",
      empresa: "Independiente",
      año: "2024",
      descripcion:
        "Creación modular de una hoja de vida usando componentes.",
    },
    {
      cargo: "Editor de Contenido",
      empresa: "WebMark",
      año: "2022",
      descripcion:
        "Redacción de contenido digital y gestión en plataformas web.",
    },
  ];

  // ----------------------------
  // EDUCACIÓN
  // ----------------------------
  const estudios = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software",
      año: "2024",
    },
    {
      institucion: "Platzi",
      curso: "Curso de Fundamentos de Programación",
      año: "2023",
    },
    {
      institucion: "OpenBootcamp",
      curso: "Curso de Git y GitHub",
      año: "2023",
    },
    {
      institucion: "FreeCodeCamp",
      curso: "Desarrollo Web con HTML, CSS y JavaScript",
      año: "2022",
    },
    {
      institucion: "Udemy",
      curso: "React desde Cero",
      año: "2024",
    },
    {
      institucion: "Google Activate",
      curso: "Curso de Marketing Digital",
      año: "2022",
    },
    {
      institucion: "LinkedIn Learning",
      curso: "Lógica de Programación",
      año: "2021",
    },
  ];

  // ----------------------------
  // ESTADO DE TECNOLOGÍAS (EV08)
  // ----------------------------
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

  const agregarTecnologia = (tec) => {
    setTecnologias([...tecnologias, tec]);
  };

  // ----------------------------
  // ESTADO DE HABILIDADES (EV08)
  // ----------------------------
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  // ----------------------------
  // RENDER
  // ----------------------------
  return (
    <div className="contenedor-cv">
      <CabeceraCV />

      <Perfil resumen={datosPerfil.resumen} habilidades={datosPerfil.habilidades} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={estudios} />

      <StackTecnologias tecnologias={tecnologias} />

      <FormularioTecnologia onAgregar={agregarTecnologia} />

      <ToggleHabilidades mostrar={mostrarHabilidades} onToggle={toggleHabilidades} />

      {mostrarHabilidades && <Habilidades />}
    </div>
  );
}

export default App;



      
