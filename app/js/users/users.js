'use strict';

module.exports = function(app) {
  require('./controllers/users_controller.js')(app);
  require('./directives/user_list_directive.js')(app);
};
