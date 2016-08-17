(function(exports) {

  it("Note stores text", function() {
    var note = new Note("My favourite language is JavaScript");
    assert.isTrue(note.getText() === "My favourite language is JavaScript");
  });

  it("Note hase a unic id", function () {
    var note1 = new Note('this is note one');
    var note2 = new Note('this is note two');
    assert.isTrue(note1.id === 1);
    assert.isTrue(note2.id === 2);
  });

})(this);
