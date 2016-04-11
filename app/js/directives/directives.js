'use strict';

module.exports = function(app) {
  require('./footer-directive')(app);
  require('./header-directive')(app);
  require('./home-view-directive.js')(app);
};
