const express = require('express');
const app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static('static'))
app.get('/', (req, res) => {
  res.render('website.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});