var MutationSummary = require('mutation-summary');

module.exports = Summary = function(windowSize){
  var self = this;
  self._datas = [];
  self._window = windowSize || 10000;
  self.observer = new MutationSummary({
    callback: handle,
    queries: [{all:true}]
  });

  function handle(summaries){
    var filtered = self._filter(summaries);
    self.pushData(filtered);
  };
}

Summary.prototype.pushData = function(data){
  var self = this;
  var index = self._datas.push(data);
  setTimeout(function(){
    self._datas.splice(0, 1);
  },self._window);
};

Summary.prototype.getRecentSummaries = function(n){
  var self = this;
  return self._datas.slice(0, n);
};

Summary.prototype._filter = function(data){
  return data;
}
