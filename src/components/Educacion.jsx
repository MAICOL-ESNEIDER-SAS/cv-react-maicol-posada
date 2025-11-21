function Educacion({ lista }) {
  return (
    <section>
      <h2>Formación Académica</h2>

      {lista.map((est, index) => (
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


