var Friends = {
  // listOfFriends: new Set(),
  toggleStatus: function () {
    //   if (Friends.listOfFriends.has(username)) {
    //     Friends.listOfFriends.add(username);
    //   }
    // },
    // friendStatus: function (username) {
    //   Friends.listOfFriends.has(username);
    // console.log($('.username'));
    //   $('.username').click(function () {
    //     // Friends.toggleStatus(value);
    //     var clicked = ($(this).text());
    //     console.log('clicked', clicked);
    //   });
    // }
    $(document).ready(function () {
      $('.username').click(function (value) {
        Friends.toggleStatus(value);
      });
    });
    .friend {
    color: #fff;
background - color: #0090da;
cursor: pointer;
    }
    .username {
  cursor: pointer;
  color: blue;
}
};

// $('.username').on('click', function (value) {
//   Friends.toggleStatus(value);
// });

