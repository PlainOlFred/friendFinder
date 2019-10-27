const
  friendsList = require('../data/friends')
 
  
module.exports = function(app) {
  

    /*API Route handles*/
    app.route('/api/friends')
      .get((req, res) => {
        
        res.json(friendsList);
      })

      .post((req, res) => {
        let 
          searchingFriend = req.body
          friendsList.push(searchingFriend);
          res.json(friendsList);
      });
  }
  
