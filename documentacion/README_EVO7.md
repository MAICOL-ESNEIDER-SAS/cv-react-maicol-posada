README – EV07: Reutilización de Componentes con Props y Desestructuración
CV React – Evidencia EV07

Aprendiz: Maicol Esneider Posada Callejas
Programa: ADSO – SENA
Actividad: GA1-220501096-03-AA1-EV07
Tema: Componentes reutilizables con Props y desestructuración

1. Descripción de la Evidencia

En esta evidencia se realizó la actualización del proyecto de Hoja de Vida en React, enfocada en la reutilización de componentes, la desestructuración de props y la centralización de la información en un único archivo de datos.

El objetivo fue hacer que cada componente dejara de tener información escrita directamente dentro del código y pasara a recibir sus datos mediante props, lo cual permite un proyecto más limpio, profesional y escalable.

Toda la información del CV se gestionó desde un archivo separado, asegurando una organización clara y una arquitectura adecuada de React.

2. Componentes Actualizados con Props

Durante la evidencia se trabajaron y adaptaron los siguientes componentes:

2.1. Componente CabeceraCV.jsx

Recibe las props:

nombre

cargo

ciudad

contacto

Se implementó desestructuración directamente en los parámetros del componente.

2.2. Componente Perfil.jsx

Recibe:

resumen

habilidades

Se mantuvo un diseño limpio y reutilizable.

2.3. Componente Experiencia.jsx

Recibe:

lista de experiencias laborales o proyectos

Se aplicó el uso del método map() para mostrar cada experiencia de forma dinámica.

2.4. Componente Educacion.jsx

Recibe:

lista de estudios, cursos y formaciones complementarias

Al igual que en EV06, se utilizó renderizado dinámico, pero ahora implementado mediante props.

2.5. Componente StackTecnologias.jsx

Recibe:

lista de tecnologías

Se conservaron los estilos condicionales y la visualización organizada.

3. Organización del Proyecto

La información del CV se concentró en un archivo único llamado:

src/cvData.js


Este archivo contiene:

Perfil

Experiencia

Educación

Tecnologías

En App.jsx se importan estos datos y se distribuyen a los componentes mediante props.

Este enfoque garantiza:

Mejor mantenibilidad

Mayor limpieza del proyecto

Separación correcta entre lógica y datos

Facilita la escalabilidad para futuras evidencias (EV08 - eventos y estados)

4. Instrucciones para Ejecutar la Evidencia
4.1. Clonar el repositorio
git clone https://github.com/tu-usuario/cv-react-maicol-posada.git

4.2. Instalar dependencias
npm install

4.3. Ejecutar el proyecto
npm run dev

4.4. Abrir en el navegador
http://localhost:5173/

5. Capturas de la Evidencia EV07

![Pantallaso1 EVO7](img/pantallaso1_EV07.png)

![Pantallaso2 EVO7](img/pantallaso2_EV07.png)

6. Conclusión de la EV07

La evidencia EV07 permitió transformar el CV en un proyecto más profesional y sólido, aplicando buenas prácticas de React como:

Uso correcto de props

Reutilización de componentes

Desestructuración de parámetros

Centralización de datos en un archivo externo

Separación clara entre presentación y contenido

Gracias a esta estructura, el proyecto se vuelve fácilmente escalable y preparado para integrar nuevas funcionalidades, como eventos y manejo del estado, trabajados posteriormente en la EV08.
