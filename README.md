# NewCombinChallenge by Leonel

## Descripción

Es un desafío técnico realizado como entrevista laboral para la empresa NewCombin. El proyecto consta de una interfaz simple con un Header, un Body y un Footer. Dentro del contenido, hay un formulario y una tabla. El proyecto tiene el objetivo de poder tomar datos de un servidor mediante el método GET y mostrarlos en la tabla, y por otra parte, subir datos al servidor con el método POST, siempre y cuando se cumplan ciertas condiciones. Para realizar esto se utilizó una API.

## Instalación

El proyecto está creado en React.js y se utilizó como Framework de CSS Tailwind. Guía paso a paso para su instalación:

 1. Instalación de Node.js con un versión 14.0.0 o superior
 2. Instalación de Git
 3. Crear una nueva carpeta en donde se desee tener el proyecto
 4. Dentro de la carpeta, abrir la terminal de Gitbash. Allí, colocar `$ git clone https://github.com/LeonelScalise/NewCombinChallenge.git`
 5. Luego, instalar las dependencias en la misma terminal `$ npm install`
 6. Para poder acceder a la API, hay que clonar el servidor para tenerlo en la computadora personal. Utilizar la url: `https://github.com/newcombin/devskills.git`
 7. Una vez dentro de la terminal del servidor colocar `$ npm install` y luego `$ npm run serve`
 8. Por último, para inicializar el proyecto del desafío colocar en la terminal `$ npm run start`
 
 ## Pruebas y funcionalidades
  
 - Completar el formulario teniendo en cuenta que no se podrán cargar los datos a la API si no se cumplen las siguientes condiciones:
   + First Name, Last Name y Address con mas de 1 caracter
   + SSN con el formato ###-##-#### sin excepción y debe ser único (no se debe encontrar ya cargada en el servidor)
 - Una vez completado el formulario, se podrá:
   + Apretar el botón de Reset: Se limpiarán los campos cargados anteriormente
   + Apretar el botón Save: Se cargarán los datos al servidor
 - Si se apretó Save, ahora deberá aparecer una fila mas en la tabla con los datos que fueron ingresados en el formulario
 
