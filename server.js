const 
  express = require('express'),
  path = require('path');

const
  app = express();
  PORT = process.env.portt || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, './app/public/home.html'));

})

  app.get(`/survey`, (req, res) => {
  res.sendFile(path.join(__dirname,'./app/public/survey.html'));

})

app.listen(PORT, () => console.log(`App listneing on http://localhost:${PORT}/`));
