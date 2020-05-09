var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    RoomsView.$button.on('click', RoomsView.handleSubmitRoom);
  },
  /* ----- add new room to chat ---- */
  handleSubmitRoom: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    if ($('#message').val()) {
      var newRoom = {};
      newRoom.roomname = document.getElementById('message').value,
      Parse.create(newRoom);
      // puts the prepending element at the first index.
      $('#rooms select').prepend(RoomsView.render(newRoom));
      document.getElementById('select').reset();
    }
    console.log('click!');
  },

  render: function (data) {
    //append #rooms select with RoomView render function
    var listOfRooms = new Set(); // Set object stores unique values of any type, whether primitive values or object references.
    // console.log('rooms', listOfRooms)
    //loop through data.results = array of nested objects
    _.each(data, function (obj) {
      // push each roomname to {}, no duplicates
      listOfRooms.add(obj.roomname);
    });
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
    $('#rooms select').append(RoomView.render(room));
  }
};
