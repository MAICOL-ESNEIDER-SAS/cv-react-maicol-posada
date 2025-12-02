// src/components/Habilidades.jsx
function Habilidades({ habilidades = [] }) {
  return (
    <div>
      <h3>Habilidades destacadas</h3>
      {habilidades.length > 0 ? (
        <ul className="chips chips-soft">
          {habilidades.map((h, i) => (
            <li key={i} className="chip soft">{h}</li>
          ))}
        </ul>
      ) : (
        <p className="placeholder">Sin habilidades registradas.</p>
      )}
    </div>
  );
}
export default Habilidades;


