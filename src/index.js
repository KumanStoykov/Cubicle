const express = require('express');

const initHandlebars = require('./config/handlebars');

const app = express();

initHandlebars(app);

// require('./config/handlebars')(app); Shortcut variant ONLY for require!!!


app.all('/', (req, res) => {
    
    res.render('index');
});

app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000'));