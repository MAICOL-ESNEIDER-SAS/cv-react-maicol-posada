
// src/components/StackTecnologias.jsx
function StackTecnologias({ tecnologias = [] }) {
  const getColor = (tech) => {
    if (tech === "React") return "var(--tech-react)";
    if (tech === "JavaScript") return "var(--tech-js)";
    if (tech === "TypeScript") return "var(--tech-ts)";
    if (tech === "HTML") return "var(--tech-html)";
    if (tech === "CSS") return "var(--tech-css)";
    if (tech === "Node.js") return "var(--tech-node)";
    if (tech === "TailwindCSS") return "var(--tech-tailwind)";
    return "var(--chip-bg)";
  };

  return (
    <div>
      <h2>Tecnologías</h2>
      {tecnologias.length > 0 ? (
        <div className="chips">
          {tecnologias.map((tech, i) => (
            <span
              key={i}
              className="chip"
              style={{ background: getColor(tech) }}
            >
              {tech}
            </span>
          ))}
        </div>
      ) : (
        <p className="placeholder">Sin tecnologías registradas.</p>
      )}
    </div>
  );
}
export default StackTecnologias;



