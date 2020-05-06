var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // Parse.readAll((data) => {
    //   this.render(data);
    // });
  },

  render: function (data) {
    //append $chats with messageView render function
    //loop through data.results = array of nested objects
    for (let i = 0; i < data.length; i++) {
      var objMessage = data[i];
      Messages.username = objMessage.username;
      Messages.text = objMessage.text;
      Messages.roomname = objMessage.roomname;
      this.$chats.append(MessageView.render(Messages));
    }
  }
};