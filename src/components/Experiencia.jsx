
// src/components/Experiencia.jsx
function Experiencia({ experiencias = [] }) {
  return (
    <div>
      <h2>Experiencia</h2>
      {experiencias.length > 0 ? (
        <ul className="cards">
          {experiencias.map((exp, i) => (
            <li key={i} className="card">
              <div className="card-line" />
              <div className="card-header">
                <span className="title">{exp.cargo}</span>
                <span className="subtitle">{exp.empresa}</span>
              </div>
              <div className="card-body">
                <span className="meta">{exp.periodo || exp.año || "Año"}</span>
                {exp.descripcion && <p>{exp.descripcion}</p>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="placeholder">Sin experiencias registradas.</p>
      )}
    </div>
  );
}
export default Experiencia;


