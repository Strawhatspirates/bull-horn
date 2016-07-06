module.exports = global.BullHorn = function(sampling) {

    //initializing the mutation summary
    if(!global.MutationObserver){
       global.MutationObserver = require('mutation-observer');
    }

    var Summary = require('./lib/summary.js');
    var Events = require('minivents');
    var assign = require('object-assign');

    var self = this;
    var _module = new Object();

    var globalData = null;

    var Observer = global._observer = new Summary(sampling);

    //inherit the eventing library
    assign(_module, new Events());


    //maintating the global list of events
    var _events = [
        "onclick",
        "onkeypress",
        "onkeydown"
    ];

    //binding global listeners
    function initialize() {
        for (var key in _events) {
            var event = _events[key];
            document[event] = onObserve;
        }
    }

    function onObserve(e) {
        setTimeout(function(){
          var data = {
              type: e.type,
              x: e.x,
              y: e.y,
              created: new Date().getTime(),
              element: {
                  id: e.target.id,
                  tag: e.target.tag,
                  text: e.target.innerHTML
              },
              summaries: Observer.getRecentSummaries(5)
          };
          _module.emit('observation', data);
        }, 500);
    }
    initialize();
    return _module;

}
