const express = require('express');
const path = require('path');
const initDatabase = require('./config/database');

const router = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV || 'development'];

const initHandlebars = require('./config/handlebars');


// Initial server
const app = express();

//Body parser
app.use(express.urlencoded({ extended: true }));


initHandlebars(app);

// require('./config/handlebars')(app); Shortcut variant ONLY for require!!!

// Load static files
app.use(express.static(path.resolve(__dirname, './static')));

//Activate router
app.use(router);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    })
