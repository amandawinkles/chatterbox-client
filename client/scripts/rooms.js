var Rooms = {

  /*
  _data: new Set(),

  selected: 'Lobby',

  isSelected: function(roomname) {
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'Lobby';
  },

  update: function(messages) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));
  },
  */

  add: function() {

    $('#rooms button').on('click', function() {
      var roomObj = {
        roomname: document.getElementById('roomText').value,
      };
      RoomsView.renderRoom(roomObj);
      $('#roomText').val('');
    });
  }
};
