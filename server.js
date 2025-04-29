require('dotenv').config();
const express = require('express');
const app = express();
const cardsRoute = require('./routes/cards');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));  // Sirve index.html y otros archivos estáticos
app.use('/api/cards', cardsRoute);  // Monta la ruta /api/cards

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});