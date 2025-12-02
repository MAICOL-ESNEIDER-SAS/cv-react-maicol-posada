
// src/components/Perfil.jsx
function Perfil({ resumen, habilidades = [] }) {
  return (
    <div>
      <h2>Perfil Profesional</h2>
      <p className="resumen">
        {resumen && resumen.trim().length > 0
          ? resumen
          : "Agrega tu resumen profesional en 3–4 líneas."}
      </p>

      <h3>Fortalezas</h3>
      {habilidades.length > 0 ? (
        <ul className="chips chips-soft">
          {habilidades.map((hab, i) => (
            <li key={i} className="chip soft">{hab}</li>
          ))}
        </ul>
      ) : (
        <p className="placeholder">Sin fortalezas registradas.</p>
      )}
    </div>
  );
}
export default Perfil;
