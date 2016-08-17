describe("Note Model", function() {

  it("can create a note", function() {
    var note = new Note("My favourite language is JavaScript");
    isTrue(note.getNote() === "My favourite language is JavaScript");
  });
  
});
