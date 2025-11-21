function StackTecnologias({ lista }) {
  // Función para asignar color según la tecnología
  const getColor = (tech) => {
    if (tech.toLowerCase() === "react") return "#61dafb";
    if (tech.toLowerCase() === "javascript") return "#f7df1e";
    if (tech.toLowerCase() === "node.js") return "#8cc84b";
    if (tech.toLowerCase() === "html") return "#e34c26";
    if (tech.toLowerCase() === "css") return "#2965f1";

    return "#555"; // color por defecto
  };

  return (
    <section>
      <h2>Stack de Tecnologías</h2>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {lista.map((tech, index) => (
          <span
            key={index}
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              backgroundColor: getColor(tech),
              color: tech.toLowerCase() === "javascript" ? "#000" : "#fff",
              fontWeight: "bold",
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
