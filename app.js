const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = app;
