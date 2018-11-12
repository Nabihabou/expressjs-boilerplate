const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Register Handlebars view engine
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
// Use Handlebars view engine
app.set('view engine', '.hbs');

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Example app is running → PORT 3000');
});