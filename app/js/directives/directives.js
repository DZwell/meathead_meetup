'use strict';

module.exports = function(app) {
  require('./footer-directive')(app);
  require('./header-directive')(app);
  require('./test-directive')(app); // delete later
  require('./home-view-directive.js')(app);
};
