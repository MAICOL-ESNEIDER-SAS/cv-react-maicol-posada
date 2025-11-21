function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrollador Front-End",
      empresa: "TechNova",
      año: "2024",
      descripcion: "Construcción de interfaces y componentes reutilizables usando React."
    },
    {
      cargo: "Diseñador Web",
      empresa: "StudioWeb",
      año: "2023",
      descripcion: "Maquetación de páginas con HTML, CSS y diseño responsivo."
    },
    {
      cargo: "Soporte Técnico",
      empresa: "Helpsys",
      año: "2022",
      descripcion: "Atención a usuarios, solución de fallos y mantenimiento de equipos."
    },
    {
      cargo: "Aprendiz ADSO",
      empresa: "SENA",
      año: "2024",
      descripcion: "Desarrollo de proyectos formativos utilizando JavaScript y React."
    },
    {
      cargo: "Freelancer – Landing Pages",
      empresa: "Clientes independientes",
      año: "2023",
      descripcion: "Diseño y construcción de páginas promocionales."
    },
    {
      cargo: "Diseñador UI",
      empresa: "Look&Feel",
      año: "2023",
      descripcion: "Creación de prototipos y optimización de interfaces."
    },
    {
      cargo: "Auxiliar Administrativo",
      empresa: "Soluciones Rápidas",
      año: "2021",
      descripcion: "Gestión de datos, manejo documental y soporte operativo."
    },
    {
      cargo: "Proyecto Personal – Tienda Online",
      empresa: "Independiente",
      año: "2024",
      descripcion: "Construcción de una tienda virtual con React y Firebase."
    },
    {
      cargo: "Proyecto Personal – CV React",
      empresa: "Independiente",
      año: "2024",
      descripcion: "Creación modular de una hoja de vida usando componentes."
    },
    {
      cargo: "Editor de Contenido",
      empresa: "WebMark",
      año: "2022",
      descripcion: "Redacción de contenido digital y gestión en plataformas."
    }
  ];

  return (
    <section>
      <h2>Experiencia Laboral / Proyectos</h2>

      {experiencias.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo}</h3>
          <p><strong>Empresa:</strong> {exp.empresa}</p>
          <p><strong>Año:</strong> {exp.año}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;

