const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();

const port = 3000;

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

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (request, response) => {
  // console.log(request.query.q);
  response.render('news');
});

app.get('/search', (request, response) => {
  response.render('search');
});

app.post('/search', (req, res) => {
  console.log(req.body);

  res.send('');
});

app.listen(port, () =>
  console.log(`Example app listening at http://http://localhost:${port}`)
);
