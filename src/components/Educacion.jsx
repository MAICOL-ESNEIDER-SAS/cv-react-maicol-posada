function Educacion() {
  const estudios = [
    {
      institucion: "SENA",
      curso: "Tecnólogo en Análisis y Desarrollo de Software",
      año: "2024"
    },
    {
      institucion: "Platzi",
      curso: "Curso de Fundamentos de Programación",
      año: "2023"
    },
    {
      institucion: "OpenBootcamp",
      curso: "Curso de Git y GitHub",
      año: "2023"
    },
    {
      institucion: "FreeCodeCamp",
      curso: "Desarrollo Web con HTML, CSS y JavaScript",
      año: "2022"
    },
    {
      institucion: "Udemy",
      curso: "React desde Cero",
      año: "2024"
    },
    {
      institucion: "Google Activate",
      curso: "Curso de Marketing Digital",
      año: "2022"
    },
    {
      institucion: "LinkedIn Learning",
      curso: "Lógica de Programación",
      año: "2021"
    }
  ];

  return (
    <section>
      <h2>Formación Académica</h2>

      {estudios.map((est, index) => (
        <div key={index}>
          <h3>{est.curso}</h3>
          <p><strong>Institución:</strong> {est.institucion}</p>
          <p><strong>Año:</strong> {est.año}</p>
        </div>
        ))}
    </section>
  );
}

export default Educacion;

