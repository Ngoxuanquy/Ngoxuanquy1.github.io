const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const routes = require('./routes');

const db = require("./confix/db");



db.connect();

app.use(express.static(path.join(__dirname ,'anh')));

app.use(express.urlencoded(
  {
    extended: true
  }
));
app.use(express.json());



app.use(morgan('combined'));

app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources' , 'views'));



routes(app);




app.listen(port, () => {
  console.log(` app listening at http://localhost:${port}`);
})