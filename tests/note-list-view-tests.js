(function(exports) {

  var noteList = new NoteList();
  var noteView = new NoteView(noteList);

  it("Note list returns empty list", function() {
    var htmlTest = "<ul></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

  it("Should display the first 20 chars of note", function() {
    var noteList2 = new NoteList();
    var noteView2 = new NoteView(noteList2);
    var dummyText = "Lorem Ipsum is simply dummy text of the printing" +
    "and typesetting industry. Lorem Ipsum has been the " +
    "industry's standard dummy text ever since the 1500s";

    noteList2.storeNote(dummyText);
    var outputLength = noteView2.getHTML().length;
    console.log(outputLength);
    assert.isTrue(outputLength === 49);

  });

  it("Note List displays a note", function() {
    noteList.storeNote("Pizza");
    var htmlTest = "<ul><li><div>Pizza</div></li></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

  it("Note list displays multiple notes", function() {
    noteList.storeNote("Pasta");
    noteList.storeNote("Cake");
    var htmlTest = "<ul><li><div>Pizza</div></li><li><div>Pasta</div></li><li><div>Cake</div></li></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

})(this);
