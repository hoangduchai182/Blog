const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();

const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
); // urlencoded xử lý dữ liệu trong form nhập
app.use(express.json());

// app.use(morgan('combined'));

app.engine(
  'hbs',
  handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route innit
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://http://localhost:${port}`)
);
