(function(exports) {

  var noteView, noteView, note, lastId;

  beforeEach = function(){
    noteList = new NoteList();
    noteView = new NoteView(noteList);
    note = new Note();
    lastId = note.id + 1;
  };

  it("Note list returns empty list", function() {
    beforeEach();
    var htmlTest = "<ul></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

  it("Should display the first 20 chars of note", function() {
    beforeEach();
    var dummyText = "Lorem Ipsum is simply dummy text of the printing" +
    "and typesetting industry. Lorem Ipsum has been the " +
    "industry's standard dummy text ever since the 1500s";

    noteList.storeNote(dummyText);
    var outputLength = noteView.getHTML().length;
    assert.isTrue(outputLength === 66);

  });

  it("Note List displays a note", function() {
    beforeEach();
    noteList.storeNote("Pizza");
    var htmlTest = "<ul><li><div><a href=\"#" + lastId + "\">Pizza</a></div></li></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

  it("Note list displays multiple notes", function() {
    beforeEach();
    noteList.storeNote("Pizza");
    noteList.storeNote("Pasta");
    noteList.storeNote("Cake");
    var htmlTest = "<ul><li><div><a href=\"#" + lastId + "\">Pizza</a>" +
    "</div></li><li><div><a href=\"#" + (lastId + 1) + "\">Pasta</a></div></li>" +
    "<li><div><a href=\"#" + (lastId + 2) + "\">Cake</a></div></li></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

  it('Each note is assigned to a url', function(){
    beforeEach();
    noteList.storeNote("I like C#");
    assert.isTrue(noteView.getHTML() === "<ul><li><div><a href=\"#"+ lastId +"\">I like C#</a></div></li></ul>");
  });

})(this);
