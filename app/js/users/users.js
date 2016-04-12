'use strict';

module.exports = function(app) {
  require('./controllers/user-controller.js')(app);
  require('./directives/user-profile-directive.js')(app);
};
