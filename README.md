# ApiREST con NodeJS + Express + MongoDB + MVC

## 📦 Sobre el repositorio
Este proyecto es una implementación de una API REST desde cero utilizando las tecnologías Node.js, Express y MongoDB. Se sigue el patrón de diseño Modelo - Vista - Controlador (MVC) para lograr una organización clara y modular del código.

## ✔️ [El respositorio aquí](https://github.com/K3yJey/apiREST.git)

## 🔧 Tecnologías utilizadas
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![Node.JS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.JS](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 📌 Comentarios adicionales
Proyecto culminado.

## ⚙️ Comandos necesarios
```console
npm init --y
```
↑ Crear el package.json

```console
npm i express --save
```
↑ Instalación de Express

```console
npm i cors dotenv multer
```
↑ Instalación de Cors(Controlar permisos de solicitudes), Dotenv(Manejar variables de entorno) y Multer(Manejar carga de archivos)

```console
npm i express-validator --S
```
↑ Instalación del validador de express, filtra la data antes de llegar al controller

```console
npm i mongoose-delete --save
```
↑ Instalación de plugin para eliminar mediante el soft-delete

```console
npm i jsonwebtoken --save
```
↑ Instalación del json web token (JWT) para el control de sesión

```console
npm i bcryptjs bcrypt --save
```
↑ IInstalación del bcrypt y bcryptjs para encriptar datos

<br/>

## ⚙️ Comandos para ejecutar el apiRest
```console
node app.js
```
↑ Inicia app.js mediante node

```console
npm i nodemon -g
```
↑ Instalación de paquete para reiniciar automáticamente la conexión ante los cambios de código

```console
"start": "node ./app.js",
"dev": "nodemon ./app.js",
```
↑ Agregar dentro del apartado de “scripts” en package.json

```console
npm run dev
```
↑ Iniciar el proyecto con nodemon

<br/>

**IMPORTANTE: Mantener la terminal corriendo para la correcta ejecución de la api.**

## 💻 Contacto
* Linkedin => [Clic aquí](https://www.linkedin.com/in/k3yjey-dev/)