var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    Rooms.addRoom();
    Rooms.update();
    // RoomsView.$button.on('click', RoomsView.handleSubmitRoom);
  },
  // /* ----- add new room to chat ---- */
  // handleSubmitRoom: function (event) {
  //   // Stop the browser from submitting the form
  //   // event.preventDefault();
  //   if ($('#roomText').val()) {
  //     var newRoom = {};
  //     newRoom.roomname = document.getElementById('roomText').value,
  //     // Parse.create(newRoom);
  //     // puts the prepending element at the first index.
  //     $('#rooms select').prepend(RoomsView.renderRoom(newRoom));
  //     // document.getElementById('select').reset();
  //   }
  //   console.log('click!');
  // },

  render: function (listOfRooms) {
    //append #rooms select with RoomView render function
    // iterate over list of rooms
    for (var room of listOfRooms) {
      // console.log('room', typeof room);
      // if the roomname exists
      if (room) {
        // console.log('first log', room);
        // declare var with empty obj
        var roomObj = {};
        // assign room value to obj
        roomObj.roomname = room;
        // console.log('second log', roomObj);
        // passing each obj with an individual roomname property to the "renderRoom" function"
        RoomsView.renderRoom(roomObj);
      }
    }
  },

  renderRoom: function (room) {
    roomname = room.roomname;
    $('#rooms select').prepend(RoomView.render(roomname));
  }
};
