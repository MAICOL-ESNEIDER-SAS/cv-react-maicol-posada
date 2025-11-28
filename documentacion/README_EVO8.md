README – EV08: Interactividad con Estados y Eventos en React
CV React – Evidencia EV08

Aprendiz: Maicol Esneider Posada Callejas
Programa: ADSO – SENA
Actividad: GA1-220501096-03-AA1-EV08
Tema: Manejo de estado e interactividad con React (useState y eventos)

1. Descripción de la Evidencia

En esta evidencia se incorporó interactividad al proyecto de hoja de vida implementado en las actividades anteriores. El propósito fue integrar eventos, estados locales, renderizado condicional y formularios controlados, permitiendo que la aplicación responda de manera dinámica a la interacción del usuario.

Las mejoras realizadas fortalecen el uso práctico de useState, así como la comunicación entre componentes mediante props para actualizar la interfaz sin recargar la página. Esto convierte el CV en una aplicación completamente reactiva.

2. Funcionalidades Implementadas
2.1. Visualizar u ocultar la sección de habilidades

Se creó un nuevo componente llamado
ToggleHabilidades.jsx, el cual incluye un botón que permite alternar entre mostrar y ocultar la sección de habilidades.

Este componente recibe:

mostrar

onToggle

La sección Habilidades.jsx aparece únicamente cuando la propiedad mostrar se encuentra activa, aplicando así un renderizado condicional.

2.2. Formulario dinámico para agregar tecnologías

Se desarrolló el componente
FormularioTecnologia.jsx, un formulario controlado con estado interno que permite ingresar nuevas tecnologías al stack del currículum.

Incluye:

Entrada de texto controlada

Evento onChange para actualizar el estado

Evento onSubmit para agregar el nuevo dato

Limpieza automática del campo al enviar

Una vez enviada la tecnología, esta se agrega automáticamente al arreglo de tecnologías almacenado en App.jsx y se muestra en pantalla sin recargar la página.

2.3. Actualización dinámica del stack de tecnologías

El componente StackTecnologias.jsx fue actualizado para recibir el arreglo de tecnologías como props.

Se utiliza:

Renderizado con map()

Estilos condicionales según el tipo de tecnología

Diseño flexible para acomodar nuevos elementos

Cada vez que se agrega una nueva tecnología desde el formulario, esta aparece directamente en esta sección, demostrando la actualización del estado global.

2.4. Manejo de estado en App.jsx

En el archivo principal del proyecto se incorporaron dos estados importantes:

Estado de tecnologías
Permite almacenar y actualizar las tecnologías del CV.
Se maneja por medio de la función agregarTecnologia().

Estado para mostrar habilidades
Controla si la sección Habilidades.jsx está visible o no.

Ambos estados se comparten con componentes secundarios mediante props.

3. Instrucciones para Ejecutar el Proyecto
3.1. Instalar dependencias
npm install

3.2. Ejecutar el proyecto
npm run dev

3.3. Abrir el navegador
http://localhost:5173/

4. Evidencias de Funcionamiento

A continuación se presentan las capturas correspondientes a la funcionalidad implementada:

FORMULARIO FUNCIONANDO

![Formulario funcionando](img/pantallaso_cv_nabegador_EVO8.png)

BOTONES ABRIR/SERRAR

![Botones Abrir/Serrar](img/pantallaso_de_botones_EVO8.png)

HABILIDADES Y NUEVAS TECNOLOGIAS

![habilidades y nuevas tecnologias](img/pantallao_de_los_botones_funcionando_EVO8.png)

5. Commits Realizados en EV08

chore: organización inicial del proyecto para integrar eventos

feat: creación del componente ToggleHabilidades con renderizado condicional

feat: implementación de useState para mostrar y ocultar habilidades

feat: creación de componente FormularioTecnologia con input controlado

feat: función agregarTecnologia implementada en App.jsx

feat: renderizado dinámico del stack de tecnologías

docs: README actualizado con información de eventos y estados

6. Conclusión de la Evidencia

La EV08 permitió enriquecer el proyecto del CV digital mediante la integración de interactividad en tiempo real. Se logró una aplicación dinámica utilizando estados, eventos, funciones manejadoras, renderizado condicional y componentes controlados.

Gracias a estas mejoras, el currículum se comporta como una interfaz profesional, modular y completamente actualizable. Esta evidencia consolidó el aprendizaje sobre el manejo del ciclo de interacción en React, preparando la estructura del proyecto para futuras implementaciones más complejas.