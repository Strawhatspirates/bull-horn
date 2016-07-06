describe("bull-horn-test-suite", function() {

    beforeEach(function() {
        this.document = $(document);
        this.horn = new BullHorn(2000);
        this.textField = $("<input></input>", {
          type: "text",
          id: "hello"
        })
    });

    it('should observe for observation event', function(done) {
        var deferred = $.Deferred();
        this.horn.on('observation', function(data) {
            console.log(data);
            deferred.resolve(data);
        });
        deferred.done(function() {
            done();
        });
        this.document.click();
    });

    // it('should detect keypress event', function(done) {
    //   done();
    // });

});
