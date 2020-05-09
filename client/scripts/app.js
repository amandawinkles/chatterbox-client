var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  roomname: 'undefined',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      let arrayOfObj = data.results;
      MessagesView.render(arrayOfObj);
      RoomsView.render(arrayOfObj);
      Rooms.addRoom(arrayOfObj);
      callback();
    });
    // setTimeout(() => {
    //   App.clearMessages();
    //   App.fetch();
    // }, 10000);
  },

  clearMessages: function() {
    $('#chats').html('');
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
