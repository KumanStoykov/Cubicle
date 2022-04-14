const express = require('express');

const app = express();

app.all('/', (req, res) => {
    
    res.send('It\' working');
});

app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000'));