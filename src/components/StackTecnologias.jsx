function StackTecnologias({ tecnologias }) {
  // Función para asignar color según la tecnología
  const getColor = (tech) => {
    if (tech === "React") return "#61dafb";       // Azul React
    if (tech === "JavaScript") return "#f7df1e";  // Amarillo JS
    if (tech === "Node.js") return "#8cc84b";     // Verde Node
    if (tech === "HTML") return "#e34c26";        // Naranja HTML
    if (tech === "CSS") return "#2965f1";         // Azul CSS

    // Color por defecto
    return "#555";
  };

  return (
    <section>
      <h2>Stack de Tecnologías</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: "8px 12px",
              backgroundColor: getColor(tech),
              color: tech === "JavaScript" ? "#000" : "#fff",
              fontWeight: "bold",
              borderRadius: "8px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default StackTecnologias;

