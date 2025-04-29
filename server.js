require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = process.env.JSONBIN_API_KEY;
const BIN_ID = process.env.BIN_ID;

app.use(express.json());
app.use(express.static('public')); // para servir index.html si está en /public

app.post('/api/cards', async (req, res) => {
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
      },
      body: JSON.stringify({ record: req.body }),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al acceder a JSONBin' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});