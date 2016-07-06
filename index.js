module.exports = BullHorn = (function(){

   //initializing the mutation summary
   var Summary = require('./lib/summary');
   var Events = require('minivents');
   var Q = require('q');
   var assign = require('object-assign');

   var self = this;
   var _module = new Object();

   var globalWorker = Q.defer();
   var globalData = null;

   var Observer = new Summary();

   //inherit the eventing library
   assign(_module, new Events());


   //maintating the global list of events
   var _events = [
     "onclick",
     "onkeypress",
     "onkeydown"
   ];

   //binding global listeners
   function initialize(){
     for(var key in _events){
       var event = _events[key];
       document[event] = onObserve;
     }
   }

   function onObserve(e){
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
   }


})();
