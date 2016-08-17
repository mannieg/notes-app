(function(exports) {

  var noteView, noteView;
  beforeEach = function(){
    noteList = new NoteList();
    noteView = new NoteView(noteList);
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
    assert.isTrue(outputLength === 49);

  });

  it("Note List displays a note", function() {
    beforeEach();
    noteList.storeNote("Pizza");
    var htmlTest = "<ul><li><div>Pizza</div></li></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

  it("Note list displays multiple notes", function() {
    beforeEach();
    noteList.storeNote("Pizza");
    noteList.storeNote("Pasta");
    noteList.storeNote("Cake");
    var htmlTest = "<ul><li><div>Pizza</div></li><li><div>Pasta</div></li><li><div>Cake</div></li></ul>";
    assert.isTrue(noteView.getHTML() === htmlTest);
  });

  it('links note to its url', function(){
    beforeEach();
    noteList.storeNote("Pizza");


  });

})(this);
