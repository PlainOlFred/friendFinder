const 
  express = require('express'),
  path = require('path');

const
  app = express();
  PORT = process.env.portt || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



/*Api Route and HTML route*/
require('./routing/apiRoutes')(app);
require('./routing/htmlRoutes')(app);

  


app.route('/api/friends')
  .get()
  .post((req,res) => {
    console.log(req.body)

  });

app.listen(PORT, () => console.log(`App listneing on http://localhost:${PORT}/`));
