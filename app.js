const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3030;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

app.use(express.json());

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor iniciado correctamente en el puerto ${port}`);
});