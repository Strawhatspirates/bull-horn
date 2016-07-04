describe("jquery.bull-horn", function() {

   beforeEach(function(){
     this.document = $(document);
   });

   it('should observe', function(done){
       this.document.trigger('click');
       this.document.on('observation', function(i,data){
         console.log(data);
         done();
       });
   });
});
