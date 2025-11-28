# CV React – Maicol Posada

Este proyecto fue desarrollado utilizando **React** y **Vite**, con el propósito de construir una hoja de vida digital modular, escalable y completamente dinámica.  
Cada evidencia (EV04 – EV08) fue ejecutada siguiendo buenas prácticas de desarrollo y control de versiones.

---

## 1. Descripción General

El proyecto consiste en la creación de una hoja de vida digital aplicando conceptos fundamentales de React.  
A lo largo del desarrollo se implementaron:

- Componentes modulares  
- Props y desestructuración  
- Renderizado condicional  
- Manejo del estado con `useState`  
- Listas dinámicas usando `map()`  
- Eventos y formularios controlados  
- Commits organizados por funcionalidad  

**Objetivo principal:** construir una estructura organizada, clara y adaptable.

---

## 2. Ejecución del Proyecto

2.1. Clonar el repositorio  
```bash
git clone <URL-DE-TU-REPOSITORIO>
2.2. Acceder al proyecto

bash
cd cv-react-maicol-posada
2.3. Instalar dependencias

bash
npm install
2.4. Ejecutar servidor local

bash
npm run dev
2.5. Abrir en el navegador

Código
http://localhost:5173/
3. Evidencias (EV04 – EV08)
3.1. EV04 – Estructura inicial del proyecto
Durante esta fase se construyó la base del proyecto y se agregaron los componentes iniciales, cada uno registrado con su respectivo commit.

Componentes creados:

CabeceraCV.jsx

Perfil.jsx

Experiencia.jsx

Educacion.jsx

App.jsx

Estos representan la estructura fundamental del CV.

3.2. EV06 – Componentes dinámicos
Se implementó el renderizado dinámico mediante arreglos y el método map().

Componentes desarrollados:

Experiencia.jsx → contiene diez experiencias laborales o proyectos con renderizado dinámico.

Educacion.jsx → lista de estudios, cursos y formaciones implementada con map().

StackTecnologias.jsx → tecnologías mostradas mediante etiquetas estilizadas, con colores asignados según tipo y renderizado condicional.

Evidencia visual del EV06: (agregar captura aquí)

3.3. EV07 – Reutilización mediante Props y Desestructuración
En esta evidencia se reorganizó el proyecto para hacerlo completamente modular mediante el uso de props.

Actualizaciones realizadas:

Se creó el archivo cvData.js, encargado de almacenar todos los datos del CV.

Se enviaron los datos desde App.jsx hacia los componentes mediante props.

Componentes actualizados:

CabeceraCV.jsx → recibe nombre, cargo, ciudad y contacto.

Perfil.jsx → recibe el resumen profesional.

Experiencia.jsx → recibe una lista de experiencias.

Educacion.jsx → recibe un arreglo de estudios.

StackTecnologias.jsx → recibe un arreglo con tecnologías.

Evidencia visual del EV07: (agregar capturas aquí)

3.4. EV08 – Interactividad con eventos y manejo de estado
En esta etapa el proyecto se volvió interactivo, incorporando estados locales y globales.

Funciones agregadas:

Mostrar y ocultar la sección de habilidades.

Agregar nuevas tecnologías mediante un formulario controlado.

Actualización instantánea sin recargar la página.

Componentes creados:

ToggleHabilidades.jsx → botón para mostrar/ocultar habilidades.

Habilidades.jsx → muestra lista de habilidades cuando el estado está activo.

FormularioTecnologia.jsx → formulario controlado que permite agregar nuevas tecnologías al stack.

Actualizaciones en App.jsx:

Implementación de estados mediante useState.

Funciones agregarTecnologia() y toggleHabilidades().

Renderizado condicional dinámico.

Evidencias visuales del EV08: (agregar capturas aquí)

4. Tecnologías Utilizadas
Tecnología	Uso principal
React	Construcción de componentes
JavaScript	Lógica y funciones
Vite	Entorno de desarrollo rápido
Git	Control de versiones
GitHub	Repositorio remoto
5. Capturas del Proyecto
(Agregar todas las capturas correspondientes a cada EV aquí)

6. Conclusiones Generales
El desarrollo de este CV digital permitió:

Comprender cómo estructurar proyectos React basados en componentes.

Aplicar props, estado local, renderizado condicional y listas dinámicas.

Implementar eventos y formularios controlados.

Construir una interfaz escalable y fácil de mantener.

Documentar progresivamente el proyecto mediante commits organizados.

Resultado: este proyecto se convierte en una base sólida para continuar con trabajos más avanzados en React.

7. Autor
Maicol Esneider Posada Callejas Aprendiz ADSO – SENA 