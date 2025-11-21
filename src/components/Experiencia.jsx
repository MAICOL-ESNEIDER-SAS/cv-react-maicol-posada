function Experiencia({ lista }) {
  return (
    <section>
      <h2>Experiencia Laboral / Proyectos</h2>

      {lista.map((exp, index) => (
        <div key={index}>
          <h3>{exp.cargo}</h3>
          <p><strong>Empresa:</strong> {exp.empresa}</p>
          <p><strong>Año:</strong> {exp.periodo || exp.año}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
