// src/components/ToggleHabilidades.jsx
function ToggleHabilidades({ mostrar, onToggle }) {
  return (
    <div className="toggle">
      <button className="btn-primary" onClick={onToggle}>
        {mostrar ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>
    </div>
  );
}
export default ToggleHabilidades;



