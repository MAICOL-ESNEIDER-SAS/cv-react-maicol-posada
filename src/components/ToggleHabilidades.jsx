function ToggleHabilidades({ mostrar, onToggle }) {
  return (
    <button onClick={onToggle} style={{ margin: "20px 0" }}>
      {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
    </button>
  );
}

export default ToggleHabilidades;


