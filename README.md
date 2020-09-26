# Instrucciones:

crear, dentro del directorio donde está clonado este repo, una carpeta llamada "public" y dentro de esta una "img", ahí agregar Subcarpetas con las imagenes deseadas a servir.
para hacer request de archivos basta con hacer get a `localhost:5490/img/carpeta/archivo.jpg`
o para obtener un lista detallada con links y otras cosas debes utilizar `localhost:5490/info?galeria=NOMBRE-CARPETA` o con dos argumentos
`localhost:5490/info?galeria=NOMBRE-CARPETA&subgaleria=NOMBRE-SUBCARPETA`

## Available Scripts

cosas para correr en el directorio del proyecto.

### `npm install`

es lo primero a correr ya que instala los modulos node necesarios para que el proyecto funcione. Una vez instalado podremos utilizar el siguiente.

### `npm start`

Este comando corre el servidor y lo deja activo con nodemon y morgan "tiny".

## NOTA

este servidor es creado con el proposito de entregar herramientas de estudio. No está finalizado, le faltan mejoras, el que quiera colaborar es bievenido.
Se utilizará en conjunto un proyecto React para mostrar dichas imágenes.

https://github.com/ftaboada/ReactPhotoGal

## END
