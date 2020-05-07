var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {

  },

  render: function (data) {
    // console.log('newMessage', data)
    //append $chats with messageView render function
    //loop through data.results = array of nested objects
    for (let i = 0; i < data.length; i++) {
      var objMessage = data[i];
      Message = {};
      Message.username = objMessage.username;
      Message.text = objMessage.text;
      Message.roomname = objMessage.roomname;
      MessagesView.renderMessage(Message);
    }
  },
  renderMessage: function(message) {
    $('#chats').append(MessageView.render(message));
  }
};