(function(exports) {

  it("Note stores text", function() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.getText() === "My favourite language is JavaScript");
  });

})(this);
