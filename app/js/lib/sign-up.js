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

    if (formData.name.length < 1 || formData.name.length > 24 || !formData.name.match(/^[a-zA-Z ]*$/)) {
      $('#sign-up-form-name').css({
        'border-color': '#ff5050',
        'color': '#ff5050'
      });
      $('#sign-up-error').html('Your name must be comprised of only letters and spaces, and be 1-24 characters.');
      return;
    }

    if (formData.username.length < 3 || formData.username.length > 20 || !formData.username.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)) {
      $('#sign-up-form-username').css({
        'border-color': '#ff5050',
        'color': '#ff5050'
      });
      $('#sign-up-error').html('Your username must be between 3 and 20 characters, and can only contain letters and numbers.');
      return;
    }

    if (formData.email.length < 5 || !formData.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
      $('#sign-up-form-email').css({
        'border-color': '#ff5050',
        'color': '#ff5050'
      });
      $('#sign-up-error').html('Your email address must be valid.');
      return;
    }

    if (formData.password.length < 6 || formData.password.length > 16) {
      $('#sign-up-form-password').css({
        'border-color': '#ff5050',
        'color': '#ff5050'
      });
      $('#sign-up-error').html('Your password must be between 6 and 16 characters.');
      return;
    }

    if (formData.password !== passConfirmation) {
      $('#sign-up-form-password, #sign-up-form-password-check').css({
        'border-color': '#ff5050',
        'color': '#ff5050'
      });
      $('#sign-up-error').html('Your passwords must match.');
      return;
    }

    $.ajax({
      type: 'POST',
      url: '/api/users',
      data: formData,
      success: function(res) {
        if (res.success) {
          $('#sign-up-success').html(res.msg);
        } else {
          $('#sign-up-error').html(res.msg);
        }
      }
    });
  });
});
