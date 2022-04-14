const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

const hbs = handlebars.create({
    extname: 'hbs',
});

app.set('views', path.resolve('./src/views'));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.all('/', (req, res) => {
    
    res.render('index', { layout: false});
});

app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000'));