const express = require('express');
const path = require('path');
const router = require('./routes')
;
const initHandlebars = require('./config/handlebars');


// Initial server
const app = express();

initHandlebars(app);

// require('./config/handlebars')(app); Shortcut variant ONLY for require!!!

// Load static files
app.use(express.static(path.resolve(__dirname, './static')));

app.use(router);

app.listen(3000, console.log.bind(console, 'Application is running on http://localhost:3000'));