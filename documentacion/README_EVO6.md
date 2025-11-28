README – EV06: Componentes Dinámicos en React
CV React – Evidencia EV06

Aprendiz: Maicol Esneider Posada Callejas
Programa: ADSO – SENA
Actividad: GA1-220501096-03-AA1-EV06
Tema: Renderizado de Listas y Renderizado Condicional en React

1. Descripción de la Evidencia

En esta evidencia se implementaron componentes dinámicos utilizando renderizado de listas, método map(), y renderizado condicional dentro del proyecto de Hoja de Vida desarrollado en React.

El propósito principal fue fortalecer la lógica interna de los componentes para que mostraran información de manera automática a partir de arreglos de datos, siguiendo buenas prácticas de modularidad, limpieza y separación de responsabilidades.

Esta evidencia representa un avance técnico importante, pues introduce las bases de la programación declarativa en React.

2. Componentes Desarrollados en la EV06

Durante esta evidencia se construyeron y actualizaron varios componentes claves del CV digital:

2.1. Componente Experiencia.jsx

En este componente se implementó:

Un arreglo que contiene diez experiencias laborales o proyectos.

Cada elemento posee cargo, empresa, año y una breve descripción.

Uso del método map() para recorrer la información y renderizarla dinámicamente.

Estructuración clara para facilitar la lectura y la escalabilidad.

2.2. Componente Educacion.jsx

Incluye:

Un arreglo con cursos, estudios formales y formaciones complementarias.

Desestructuración de datos para mejorar la presentación.

Renderizado dinámico mediante listas.

Diseño limpio y modular.

2.3. Componente StackTecnologias.jsx

Este componente replica el ejemplo trabajado en clase, permitiendo:

Mostrar una colección de tecnologías relacionadas con el perfil del aprendiz.

Uso del método map() para generar la lista.

Renderizado condicional de estilos (según tipo o categoría).

Organización visual más profesional.

3. Instrucciones para Ejecutar el Proyecto

Para visualizar el proyecto correspondiente a esta evidencia en tu equipo:

3.1. Clonar el repositorio
git clone https://github.com/tu-usuario/cv-react-maicol-posada.git

3.2. Instalar dependencias
npm install

3.3. Ejecutar el servidor
npm run dev

3.4. Abrir el navegador
http://localhost:5173/

4. Capturas de Evidencia EV06

Se incluyen imágenes del funcionamiento dinámico del CV:

![pantallaso EVO6](img/pantallaso_EV06.png)

5. Conclusión de la EV06

La realización de esta evidencia permitió comprender profundamente el uso de renderizado dinámico, uno de los pilares fundamentales de React.

Gracias al uso de listas, props y estructuras flexibles:

El proyecto ahora es más modular.

La información se organiza de forma automática.

Se facilita la actualización del contenido sin modificar la estructura del componente.

Se establecieron bases sólidas para las siguientes evidencias (EV07 y EV08), donde se incorporarán props, estados y eventos.

La EV06 marca un avance significativo en la construcción profesional del CV digital.