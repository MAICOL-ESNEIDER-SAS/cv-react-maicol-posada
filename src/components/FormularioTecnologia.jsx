import { useState } from "react";

function FormularioTecnologia({ onAgregar }) {
  const [nuevaTec, setNuevaTec] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nuevaTec.trim() === "") return;

    onAgregar(nuevaTec);
    setNuevaTec("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar nueva tecnología</h3>

      <input
        type="text"
        placeholder="Escribe una tecnología..."
        value={nuevaTec}
        onChange={(e) => setNuevaTec(e.target.value)}
      />

      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTecnologia;
