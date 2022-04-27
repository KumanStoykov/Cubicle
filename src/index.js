const express = require('express');
const router = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');

const config = require('./config/config.json')[process.env.NODE_ENV];
const initDatabase = require('./config/database');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');



// Initial server
const app = express();

//Body parser
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(authMiddleware.auth);
require('./config/handlebars')(app);

// Load static files
app.use(express.static(path.resolve(__dirname, './static')));
//Activate router
app.use(router);
//Global error handler
app.use(errorHandlerMiddleware);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('Application init failed: ', err);
    });
