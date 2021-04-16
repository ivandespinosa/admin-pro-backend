require('dotenv').config();

const cors = require('cors');
const express = require('express');

const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

// Configurar CORS
app.use( cors() );

// Base de datos
dbConnection();

// Username: mean_user
// Password: nVzoDMZtFzenXKE6

// Rutas
app.get( '/', (req, res) => {
    res.json({
        ok:true,
        msg:'Hola Mundo'
    });
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});