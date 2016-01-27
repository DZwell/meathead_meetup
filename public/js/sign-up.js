'use strict';

$(function() {
  $('#sign-up-form-submit').click(function(e) {
    e.preventDefault();

    var formData = {
      username: $('#sign-up-form-username').val(),
      password: $('#sign-up-form-password').val()
    };

    $.ajax({
      type: 'POST',
      url: '/api/users',
      data: formData,
      success: function(res) {
        if (res.success) {
          console.log('success');
        } else {
          console.log('fail' + res);
        }
      }
    });
  });
});
