# CV React – Evidencia EV07

**Actividad:** GA1-220501096-03-AA1-EV07  
**Tema:** Componentes reutilizables con Props y desestructuración  
**Aprendiz:** Maicol Esneider Posada Callejas  
**Programa:** ADSO – SENA  

---

## Descripción de la Evidencia

En esta evidencia se actualizó el proyecto de Hoja de Vida en React, enfocándose en la **reutilización de componentes**, la **desestructuración de props** y la **centralización de la información en un único archivo de datos**.

**Objetivo principal:**
- Eliminar información escrita directamente en los componentes.
- Implementar el uso de props para pasar datos dinámicamente.
- Garantizar un proyecto más limpio, profesional y escalable.

Toda la información del CV se gestionó desde un archivo separado, asegurando una organización clara y una arquitectura adecuada en React.

---

## Componentes Actualizados con Props

### 2.1 Componente `CabeceraCV.jsx`
Recibe las props:
- `nombre`
- `cargo`
- `ciudad`
- `contacto`

Se implementó desestructuración directamente en los parámetros del componente.

### 2.2 Componente `Perfil.jsx`
Recibe:
- `resumen`
- `habilidades`

Diseño limpio y reutilizable.

### 2.3 Componente `Experiencia.jsx`
Recibe:
- Lista de experiencias laborales o proyectos.

Uso del método `map()` para mostrar cada experiencia de forma dinámica.

### 2.4 Componente `Educacion.jsx`
Recibe:
- Lista de estudios, cursos y formaciones complementarias.

Renderizado dinámico mediante props.

### 2.5 Componente `StackTecnologias.jsx`
Recibe:
- Lista de tecnologías.

Se conservaron estilos condicionales y organización visual.

---

## Organización del Proyecto

La información del CV se concentró en un archivo único:

```

src/cvData.js

```

### Este archivo contiene:
- Perfil
- Experiencia
- Educación
- Tecnologías

En `App.jsx` se importan estos datos y se distribuyen a los componentes mediante props.

**Beneficios:**
- Mejor mantenibilidad.
- Mayor limpieza del proyecto.
- Separación correcta entre lógica y datos.
- Escalabilidad para futuras evidencias (EV08 - eventos y estados).

---

## Instrucciones para Ejecutar la Evidencia

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/cv-react-maicol-posada.git

# 2. Instalar dependencias
npm install

# 3. Ejecutar el proyecto
npm run dev
```

Abrir en el navegador:  
<http://localhost:5173/>

***

## Capturas de la Evidencia EV07

**Pantallazo 1 cv navegador EV07** 

![Pantallazo 1 EV07](img/pantallaso1_EV07.png)

**Pantallazo 2 cv navegador EV07**

![Pantallazo 2 EV07](img/pantallaso2_EV07.png)

***

## Conclusión de la EV07

La evidencia EV07 permitió transformar el CV en un proyecto más profesional y sólido, aplicando buenas prácticas de React como:

*   Uso correcto de props.
*   Reutilización de componentes.
*   Desestructuración de parámetros.
*   Centralización de datos en un archivo externo.
*   Separación clara entre presentación y contenido.

Gracias a esta estructura, el proyecto se vuelve fácilmente escalable y preparado para integrar nuevas funcionalidades, como eventos y manejo del estado, trabajados posteriormente en la EV08.

```

