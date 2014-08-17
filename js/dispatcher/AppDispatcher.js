var Dispatcher = require('flux/src/Dispatcher');

var merge = require('react/lib/merge');

var AppDipatcher = merge(Dispatcher.prototype, {
  handleViewAction: function (action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }
});

module.exports = AppDispatcher;
