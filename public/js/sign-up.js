'use strict';

$(function() {
  $('#sign-up-form-submit').click(function(e) {
    e.preventDefault();

    var formData = {
      name: $('#sign-up-form-name').val(),
      username: $('#sign-up-form-username').val(),
      email: $('#sign-up-form-email').val(),
      password: $('#sign-up-form-password').val()
    };

    var passConfirmation = $('#sign-up-form-password-check').val();

    validateForm(formData, passConfirmation);

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
