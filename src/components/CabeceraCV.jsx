
// src/components/CabeceraCV.jsx
function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <div className="cabecera">
      {/* Avatar futurista */}
      <div className="avatar">
        <span className="avatar-initials">
          {nombre ? nombre.split(" ")[0][0] + nombre.split(" ")[1][0] : "MP"}
        </span>
      </div>

      {/* Nombre y cargo */}
      <h1 className="nombre">{nombre || "Tu Nombre"}</h1>
      <p className="cargo">{cargo || "Tu Cargo"}</p>

      {/* Ciudad y contacto */}
      <p className="ubicacion">
        {ciudad ? ciudad : "Tu Ciudad, País"} •{" "}
        {contacto ? (
          <a href={`mailto:${contacto}`} className="link">
            {contacto}
          </a>
        ) : (
          "tu-correo@ejemplo.com"
        )}
      </p>
    </div>
  );
}

export default CabeceraCV;

