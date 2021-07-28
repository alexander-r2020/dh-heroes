const express = require('express'); // requiere el modulo de expres
const app = express(); // guarda el expres ejecutado en la variable app
const path= require('path') // llama al modulo PATH para hacer uso de la ruta requerida
const port = 3030; // estableciendo un numero de puerto en variable

/************* Poner archivos estaticos **********************/
app.use(express.static('public'))

/******* Inicio de Servidor *********/
app.listen(port,()=> console.log("Estoy a tus ordenes en el puerto " + port));

/************  Presentacion de Paginas *****************/
app.get('/home',(req,res)=> res.sendFile(path.join(__dirname,'views','index.html')))
app.get('/babbage',(req,res)=> res.sendFile(path.join(__dirname,'views','babbage.html')))
app.get('/berners-lee',(req,res)=> res.sendFile(path.join(__dirname,'views','berners-lee.html')))
app.get('/clarke',(req,res)=> res.sendFile(path.join(__dirname,'views','clarke.html')))
app.get('/hamilton',(req,res)=> res.sendFile(path.join(__dirname,'views','hamilton.html')))
app.get('/hopper',(req,res)=> res.sendFile(path.join(__dirname,'views','hopper.html')))
app.get('/lovelace',(req,res)=> res.sendFile(path.join(__dirname,'views','lovelace.html')))
app.get('/turing',(req,res)=> res.sendFile(path.join(__dirname,'views','turing.html')))