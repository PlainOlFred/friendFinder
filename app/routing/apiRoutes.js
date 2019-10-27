const
  friendsList = require('../data/friends');

  module.exports = function(app) {

    /*API Route handles*/
    app.route('/api/friends')
      .get((req, res) => {
        res.json(friendsList);
      })

      .post((req, res) => {

        /*Finding friend */
        let 
          searchingFriend = req.body,
          foundFriendMN = 100,
          foundFriend;
          

        searchingFriend.scores = searchingFriend.scores.map(function(score) { 
          return Number.parseInt(score);
        })
          


        for(let friend of friendsList) {
          let matchNumber = 0; //sum of difference
          let i = 0; //to iterate over searchingFriend scores
          
          for(let score of friend.scores) {
            
            let diff = Math.abs(searchingFriend.scores[i] - score)
            matchNumber += diff;
            i++;
          }
          console.log(
            matchNumber
          )
          if(matchNumber < foundFriendMN) {
            foundfriend = friend[0];
          } 
        }



        friendsList.push(searchingFriend);
        console.log(foundFriend);
        res.json(friendsList);
      });
  }