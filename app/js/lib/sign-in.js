'use strict';

$(function() {
  $('#sign-in-form-submit').click(function(e) {
    e.preventDefault();

    var formData = {
      username: $('#sign-in-form-username').val(),
      password: $('#sign-in-form-password').val()
    };

    $.ajax({
      type: 'GET',
      url: '/api/sign-in',
      data: formData,
      // beforeSend: function(xhr) {
      //   xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' +password));
      // },
      success: function(res) {
        if (res.success) {
          // sessionStorage.setItem('token', res.token);

          // location.replace('/user_panel.html');
          $('#sign-in-success').html(res.msg);
        } else {
          $('#sign-in-error').html(res.msg);
        }
      }
    });
  });
});
