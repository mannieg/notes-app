(function(exports) {

  var singleNoteView = new SingleNoteView();

  it("Returns a string of html with the note", function() {
    assert.isTrue(singleNoteView.getNote() === "");
  });

})(this);
