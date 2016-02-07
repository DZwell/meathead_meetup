'use strict';

module.exports = function(app) {
  require('./controllers/users_controller')(app);
  require('./controllers/show_all_users_controller')(app);
};
