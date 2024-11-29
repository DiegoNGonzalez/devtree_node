//const express = require("express"); // CJS Common js
import express from "express"; // ESM Ecmascript modules
import 'dotenv/config'
import router from "./router"
import { connectDB } from "./config/db";


const app = express();

connectDB()
//Leer datos de forms

app.use(express.json())

app.use('/', router)



export default app