const
  path = require('path'),
  friendsList = require('../data/friends');

  module.exports = function(app) {

    /*API Route handles*/
    app.route('/api/friendsList')
      .get((req, res) => {
        res.json(friendsList);
      })

      .post((req, res) => {
        friendsList.push(friendsList);
        res.json(friendsList);
      }


  }