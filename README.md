# Prueba Técnica para desarrolladores backend
Prueba técnica de backend para prospectos que busca evaluar conocimientos en API's, web services y BD.

![status](https://img.shields.io/badge/status-running-green.svg?colorB=00C106) ![readme](https://img.shields.io/badge/readme-OK-green.svg?colorB=00C106) ![database](https://img.shields.io/badge/database-OK-green.svg?colorB=00C106) ![commits](https://img.shields.io/badge/commits-26-blue.svg) ![tag](https://img.shields.io/badge/tag-v0.3-orange.svg)
![template](https://img.shields.io/badge/template-twig-yellow.svg) 

## Estructura de la prueba
La prueba está dividida en 4 partes:
```
  -Primera: Creación del proyecto en NodeJS, creación de la BD relacional/no relacional.
  -Segunda: Creación y diseño de una API RestFull en NodeJS.
  -Tercera: Creación de vistas o templates desde el servidor o un frontend separado usando tecnologias modernas.
  -Cuarta: Deploy de la BD, backend y frontend en la nube. 
```

## Primeros pasos
  ##### Haz fork a este repo, clonalo y comienza a trabajar sobre ese mismo. Al final, para el entregable se revisará este repo.
  #### Tips: Puedes usar cualquier libreria o framework que te facilite las cosas, buscar en internet y guiarte de muchos recursos. Lo único que no está permitido es robar código de forma completa.
  #### Ve haciendo varios commits por avance, también evaluamos la forma en que manejas Git.
  #### Happy coding 🔥

## Parte 1: Creación del proyecto Node JS y diseño de la BD relacional/no relacional.
```
  -Crea el proyecto, instala dependencias y monta un servidor web usando express JS
  -Diseña una BD relacional en MySQL o noSQL en MongoDB que tenga las siguientes carácteristicas:
    -Login de usuarios con email y contraseña
    -Trabajadores (información de los trabajadores)
    -Areas de trabajo (áreas de una empresa cualquiera)
    -Nómina (horas de trabajo, idTrabajador, pagos y deducciones)
   -Conecta la BD al proyecto
```
## Parte 2: Creación y diseño de una API RestFull en NodeJS.
```
  - Crea rutas y useCases para el manejo de la BD con un endpoint por verbo http y por tabla:
    -Ejemplo: localhost:3000/miAPI.com/trabajadores/    GET
    -Ejemplo: localhost:3000/miAPI.com/trabajadores/    POST
    -Ejemplo: localhost:3000/miAPI.com/trabajadores/    PATCH
    -Ejemplo: localhost:3000/miAPI.com/trabajadores/    DELETE
    -Los cuatro para la tabla trabajadores
    -La única que solo será GET es la de login de usuarios. Tu ingresa dos usuarios de prueba de forma manual en la BD.
  -En total se debe tener una carpeta de rutas por tabla con sus endpoints.
  -Prueba tu API usando cualquier software de tu conocimiento.
```
## Parte 3: Creación de vistas o templates desde el servidor o un frontend separado usando tecnologias modernas.
```
  - Crea una vista que consuma cada endpoint de cada tabla.
  - Puedes usar templates como hbs, pug, etc. O un framework como react, angular, vue. 
  - Muestra los datos de forma ordenada.
  - Plus (opcional): Crea las vistas de forma responsive.
```
## Parte 4: Deploy de la BD, backend y frontend en la nube. 
```
  -Sube tu base de datos a cualquier nube (mlab, mongo atlas, ibm cloud, firebase) o en caso de MySQL a 000webhost. 
  - Haz el deploy de tu API a un servicio de cloud foundry en IBM Cloud.
  - O también puedes subir tu API a heroku.
  - En caso de haber creado tus vistas del frontend aparte, puedes subirlo a firebase o netlify. 
  - Haz el último push de tu proyecto terminado. 
```
## Últimos pasos 
```
  -Sí llegaste hasta aqui te felicito, hiciste un buen trabajo y gracias por aplicar a una vacante con nosotros.
  -Síno terminaste, no te desanimes. Uno de los puntos más importantes que consideramos es la forma en la que trataste de resolver los problemas. 😎
```

