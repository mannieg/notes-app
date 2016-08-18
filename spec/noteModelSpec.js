describe("Note Model", function() {

  var note = new Note("My favourite language is JavaScript");

  it("can create a note", function() {
    isTrue(note.getText() === "My favourite language is JavaScript");
  });

});
