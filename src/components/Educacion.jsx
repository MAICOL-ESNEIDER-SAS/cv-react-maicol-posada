

// src/components/Educacion.jsx
function Educacion({ estudios = [] }) {
  return (
    <div>
      <h2>Educación</h2>
      {estudios.length > 0 ? (
        <ul className="cards">
          {estudios.map((ed, i) => (
            <li key={i} className="card">
              <div className="card-line" />
              <div className="card-header">
                <span className="title">{ed.institucion}</span>
                <span className="subtitle">{ed.curso}</span>
              </div>
              <div className="card-body">
                <span className="meta">{ed.año || "Año"}</span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="placeholder">Sin estudios registrados.</p>
      )}
    </div>
  );
}
export default Educacion;




