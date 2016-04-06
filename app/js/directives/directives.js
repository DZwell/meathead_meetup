'use strict';

module.exports = function(app) {
  require('./landing-directive')(app);
  require('./about-directive')(app);
  require('./sign-up-directive')(app);
  require('./footer-directive')(app);
  require('./view-directive')(app);
};
