function CabeceraCV({ nombre, cargo, ciudad, telefono, correo }) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>

      <ul>
        <li>📍 {ciudad}</li>
        <li>📞 {telefono}</li>
        <li>📧 {correo}</li>
      </ul>
    </header>
  );
}

export default CabeceraCV;

