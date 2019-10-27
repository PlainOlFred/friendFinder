const path = require('path');

  module.exports = function(app) {

    /*Home Route*/
    app.route('/')
      .get((req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
      })


    /*Survey Route*/
    app.route('/survey')
      .get((req, res) => {
        res.sendFile(path.join(__dirname,'../public/survey.html'));
      })
      .post((req, res) => {

        
      });
   
  }