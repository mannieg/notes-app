describe("Note Model", function() {

  it("can create a note", function() {
    var note = new Note("My favourite language is JavaScript");
    isTrue(note.getText() === "My favourite language is JavaScript");
  });

});
