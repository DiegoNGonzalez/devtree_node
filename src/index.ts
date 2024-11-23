//const express = require("express"); // CJS Common js
import express from "express"; // ESM Ecmascript modules
const app = express();

//Routing

app.get("/", (req, res) => {
  res.send("Hola mundo en Express / Typescript");
});

app.get("/ecommerce", (req, res) => {
  res.send("Este es el ecommerce");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Servidor funcionando en el puerto:", port);
});
