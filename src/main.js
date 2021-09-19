const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const path = require('path');

const route = require('./routes');
const db = require('./config/db');


db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

// app.use(morgan('combined'));

app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes app
route(app);
app.listen(port, (req, res) => console.log(`Server listens at http://localhost:${port}`));