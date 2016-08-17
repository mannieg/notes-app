(function(exports) {
  var note = new Note('whatever');
  var singleNoteView = new SingleNoteView(note);

  it("Returns a string of html with the note", function() {
    assert.isTrue(singleNoteView.getNote() === "<div>whatever</div>");
  });

})(this);
