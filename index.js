
(function($){
   var MuationSummary = global.MutationSummary = require('mutation-summary');
   var summary = null;
   var observer = global.observer =new MuationSummary({
     callback: function(summaries){
       summary=summaries;
     },
     queries: [{all:true}]
   });

   var actions = [
     'load',
     'click',
     'keypress',
     'keydown'
   ]

   function initialize(){
     for(var key in actions){
       $(document).on(actions[key], onObserve);
     }
   }

   initialize();

   function onObserve(e){
      var data = {
        type: e.type,
        x: e.clientX,
        y: e.clientY,
        summaries: summary
      };
      $(document).trigger('observation', data);
   }

})($)
