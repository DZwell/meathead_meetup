'use strict';

module.exports = function(app) {
  require('./controllers/users_controller.js')(app);
  require('./controllers/profile_controller.js')(app);
  require('./directives/user-profile-directive.js')(app);
};
