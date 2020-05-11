var Friends = {
  listOfFriends: new Set(),

  toggleStatus: function(username) {
    if (!Friends.listOfFriends.has(username)) {
      Friends.listOfFriends.add(username);
    }
  },

  friendStatus: function(username) {
    Friends.listOfFriends.has(username);
  }
};
$('.username').click(function(value) {
  let name = ($(this).text());
  //console.log
  Friends.toggleStatus(name);
});

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
*/

