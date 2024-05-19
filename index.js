const express = require('express')
const dbConnection = require('./config/config')

const cors = require('cors'); // Importar el paquete cors

const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3000
const routes = require('./routes/contacts');

// Lista blanca de dominios permitidos
const whitelist = ['http://localhost:3000', 'https://biser-proyect.web.app'];

// Configuración de CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Usar CORS con las opciones configuradas
app.use(cors(corsOptions));


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', routes)

dbConnection()

app.listen(PORT, () => {
  console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})