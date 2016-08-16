(function(exports) {

  var noteList = new NoteList(Note);
  var noteView = new NoteView(noteList);

  it("Note list returns empty list", function() {
    var htmlTest = "<ul></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
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
