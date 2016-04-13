'use strict';

module.exports = function(app) {
  require('./controllers/map_controller')(app);
  require('./directives/search-directive')(app);
  require('./directives/search-view-directive')(app);
};
