var Friends = {

  listOfFriends: new Set,

  toggleStatus: function(username) {
    if (!Friends.listOfFriends.has(username)) {
      Friends.listOfFriends.add(username);
      Friends.friendStatus = true;
    }
    else {
      Friends.listOfFriends.delete(username);
      Friends.friendStatus = false;
    }
  },

  friendStatus: function(username) {
    Friends.listOfFriends.has(username);
  }
};

/*
var Friends = {
  listOfFriends: new Set(),

  toggleStatus: function(username) {
    $('.username').on('click', function(value) {
      let name = ($(this).text());
      Friends.toggleStatus(name);
    });
  },

  friendStatus: function(username) {
    Friends.listOfFriends.has(username);
  }
};


let username = $(event).text();
    $('.username').click(function(value) {
      Friends.toggleStatus(value.target);
      //console.log
      //Friends.toggleStatus(value);
    });
*/

