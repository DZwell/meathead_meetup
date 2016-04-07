'use strict';

module.exports = function(app) {
  require('./controllers/sign-up_controller')(app);
  require('./controllers/sign-in_controller')(app);
  require('./controllers/auth_controller')(app);
};
