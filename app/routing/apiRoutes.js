const
  path = require('path');

  module.exports = function(app) {

    /*Home Route*/
    app.route('/')
      .get((req, res) => {
        res.sendFile(path.join(__dirname, './app/public/home.html'));

      })


    /*Survey Route*/
    app.route('/survey')
      .get((req, res) => {
        res.sendFile(path.join(__dirname,'./app/public/survey.html'));
      });
   
  }