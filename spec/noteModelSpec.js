describe("Note Model", function() {

  var note = new Note("My favourite language is JavaScript");

  it("can create a note", function() {
    isTrue(note.getText() === "My favourite language is JavaScript");
  });

  it("creates a note with a unique id", function() {
    isTrue(note.id === 0);
    var note2 = new Note("My favourite language is haskell");
    isTrue(note2.id === 1);
  });

});
