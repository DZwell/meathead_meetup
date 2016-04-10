'use strict';

module.exports = function(app) {
  require('./about-directive')(app);
  require('./sign-up-directive')(app);
  require('./footer-directive')(app);
  require('./landing-directive')(app);
  require('./header-directive')(app);
  require('./main-view-directive')(app);
};
