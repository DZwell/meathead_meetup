'use strict';

function validateForm(data, pwConf) {
  if (data.name.length < 1 || data.name.length > 24 || !data.name.match(/^[a-zA-Z ]*$/)) {
    $('#sign-up-form-name').css({
      'border-color': '#ff5050',
      'color': '#ff5050'
    });
    $('#sign-up-error').html('Your name must be comprised of only letters and spaces, and be 1-24 characters.');
    return;
  }

  if (data.username.length < 3 || data.username.length > 20 || !data.username.match(/^([0-9]|[a-z])+([0-9a-z]+)$/i)) {
    $('#sign-up-form-username').css({
      'border-color': '#ff5050',
      'color': '#ff5050'
    });
    $('#sign-up-error').html('Your username must be between 3 and 20 characters, and can only contain letters and numbers.');
    return;
  }

  if (data.email.length < 5 || !data.email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)) {
    $('#sign-up-form-email').css({
      'border-color': '#ff5050',
      'color': '#ff5050'
    });
    $('#sign-up-error').html('Your email address must be valid.');
    return;
  }

  if (data.password.length < 6 || data.password.length > 16) {
    $('#sign-up-form-password').css({
      'border-color': '#ff5050',
      'color': '#ff5050'
    });
    $('#sign-up-error').html('Your password must be between 6 and 16 characters.');
    return;
  }

  if (data.password !== pwConf) {
    $('#sign-up-form-password, #sign-up-form-password-check').css({
      'border-color': '#ff5050',
      'color': '#ff5050'
    });
    $('#sign-up-error').html('Your passwords must match.');
    return;
  }
};
