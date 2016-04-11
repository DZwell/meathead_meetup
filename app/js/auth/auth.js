'use strict';

module.exports = function(app) {
  require('./controllers/sign-up_controller')(app);
  require('./controllers/sign-in_controller')(app);
  require('./controllers/auth_controller')(app);
  require('./directives/login-directive')(app);
  require('./directives/login-view-directive')(app);
};
