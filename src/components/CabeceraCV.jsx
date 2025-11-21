function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
  return (
    <header>
      <h1>{nombre}</h1>
      <h2>{cargo}</h2>

      <ul>
        <li>📍 {ciudad}</li>
        <li>📞 {contacto}</li>
      </ul>
    </header>
  );
}

export default CabeceraCV;
