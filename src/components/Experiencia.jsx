function Experiencia({ experiencias }) {
  if (!experiencias) {
    return <p>No hay experiencias para mostrar.</p>;
  }

  return (
    <section>
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiencias.map((exp, i) => (
          <li key={i}>
            <strong>{exp.cargo}</strong> – {exp.empresa} ({exp.año})
            <p>{exp.descripcion}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experiencia;


