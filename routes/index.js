const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Minha Pika!");
});

app.listen(PORT, () => {
    console.log('Arromba mentes' + PORT);
});