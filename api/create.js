      

        export default async function handler(req, res) {
          if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Método no permitido' });
          }
        

            const BIN_ID = '681128758561e97a500a49ca';
          const API_KEY = process.env.JSONBIN_API_KEY;
          const card = req.body;
        
          try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY,
              },
              body: JSON.stringify({ record: card }),
            });
        
            if (!response.ok) throw new Error('Error en la API externa');
        
            const result = await response.json();
            res.status(200).json({ success: true, result });
        
          } catch (error) {
            console.error('Error al crear tarjeta:', error);
            res.status(500).json({ message: 'Error al guardar tarjeta' });
          }
        }