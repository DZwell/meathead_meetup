'use strict';

$(function() {
  $('#sign-in-form-submit').click(function(e) {
    e.preventDefault();

    var username = $('#sign-in-form-username').val();
    var password = $('#sign-in-form-password').val();

    $.ajax({
      type: 'GET',
      url: '/api/users',
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' +password));
      },
      success: function(res) {
        if (res.success) {
          sessionStorage.setItem('token', res.token);

          location.replace('/user_panel.html');
        } else {
          $('#sign-in-error').html(res.msg);
        }
      }
    });
  });
});
