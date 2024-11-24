//const express = require("express"); // CJS Common js
import express from "express"; // ESM Ecmascript modules
import router from "./router"
const app = express();


//Leer datos de forms

app.use(express.json())

app.use('/', router)



export default app