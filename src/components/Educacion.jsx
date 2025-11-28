function Educacion({ estudios }) {
  if (!estudios || estudios.length === 0) {
    return <p>No hay información académica para mostrar.</p>;
  }

  return (
    <section>
      <h2>Formación Académica</h2>
      <ul>
        {estudios.map((edu, i) => (
          <li key={i}>
            <strong>{edu.curso}</strong> – {edu.institucion} ({edu.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;



