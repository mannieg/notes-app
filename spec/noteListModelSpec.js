describe("Note List Model", function() {

  it("can store multiple notes", function() {
    var note1 = new Note("Test 1");
    var note2 = new Note("Test 2");
    var list = new List();

    list.addNote(note1);
    list.addNote(note2);

    isTrue(list.getAllNotes().length === 2);
  });
});
