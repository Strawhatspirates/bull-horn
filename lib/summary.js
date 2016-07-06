var MutationSummary = require('mutation-summary');

module.exports = function Summary(){
  var self = this;
  self._datas = [];
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
  setTimout(function(){
    self._datas.splice(0, 1);
  },10000);
};

Summary.prototype.getRecentSummaries = function(n){
  return self._datas.slice(0, n);
};

Summary.prototype._filter = function(data){
  return data;
}
