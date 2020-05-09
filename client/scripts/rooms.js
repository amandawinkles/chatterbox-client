var Rooms = {
  // Set object stores unique values of any type, whether primitive values or object references.
  listOfRooms: new Set(),
  addRoom: function (data) {
    // Set object stores unique values of any type, whether primitive values or object references.
    //loop through data.results = array of nested objects
    _.each(data, function (obj) {
      // push each roomname to {}, no duplicates
      // this.listOfRooms.roomname = obj.roomname; //listOfRooms.roomname = obj.roomname
      Rooms.listOfRooms.add(obj.roomname);
      RoomsView.render(Rooms.listOfRooms);
    });
  },
  // need add method for individual room added by user to add to set
  update: function() {
    //when add room is clicked, add roomText to listOfRooms
    $('#buttonRoom').on('click', function() {
      // listOfRooms.add($('#roomText').val());
      Rooms.listOfRooms.add($('#roomText').val());
      //get $('#roomText').val()
    });
  }
};
