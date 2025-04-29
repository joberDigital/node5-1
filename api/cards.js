module.export =async function (req, res) {
  const BIN_ID = '681128758561e97a500a49ca';
  const API_KEY = process.env.JSONBIN_API_KEY;
  try {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': API_KEY
      }
    });
    const data = await response.json();
    res.status(200).json(data.record);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener tarjetas' });
  }
}