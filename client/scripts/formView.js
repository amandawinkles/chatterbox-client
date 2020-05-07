var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    if ($('#message').val()) {
      var newMessage = {};
      newMessage.username = App.username;
      newMessage.roomname = 'Lobby';
      newMessage.text = $('#message').val();
      Parse.create(newMessage);
      MessagesView.render(newMessage);
    }
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  //clickSubmit:

};