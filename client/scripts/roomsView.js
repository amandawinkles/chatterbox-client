var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    Rooms.add();

  },

  render: function (arrayOfObj) {
    // arrayOfObj = data.result [{}, {}, {}]
    //append #rooms select with RoomView render function
    var listOfRooms = [];
    arrayOfObj.forEach(function (obj) {
      if (obj.roomname && !listOfRooms.includes(RoomView.render({ roomname: obj.roomname }))) {
        listOfRooms.push({ roomname: obj.roomname }); // list of individual objects [{roomname: "all"}, {roomname: "room1"}]
      }
    });
    // iterate over list of rooms
    for (var roomObj of listOfRooms) {
      // passing each obj with an individual roomname property to the "renderRoom" function"
      RoomsView.renderRoom(roomObj);
    }
    return listOfRooms;
  },

  // filterRooms: function (data) {
  //   // let data = this.dataCollection;
  //   // App.clearMessages();
  //   for (let i = data.length - 1; i >= data.length - 101; i--) {
  //     let roomList = data[i]; // {}
  //     // console.log('roomList', roomList);
  //     if (roomList.roomname === undefined || roomList.roomname === "") {
  //       continue;
  //     }
  //     if (roomList.roomname === $('#select option:selected').text()) {
  //       MessagesView.renderMessage(roomList);
  //     }
  //   }
  // },

  renderRoom: function (room) {
    // console.log(room);
    roomname = room.roomname;
    $('#rooms select').append(RoomView.render(roomname));
  }
};
