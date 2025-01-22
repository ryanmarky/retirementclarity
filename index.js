const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static('static'))
app.get('/', (req, res) => {
  res.render('website.html');
});

