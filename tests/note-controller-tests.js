(function(exports) {

  var noteController = new NoteController(NoteList, Note, NoteView);

  // Custom Mocks of the document at global scope
  var app = {innerHTML: ""};

  it("can instantiate note controller", function() {
    assert.isTrue(noteController instanceof NoteController);
  });

  it("can modify app dom", function() {
    var div = document.getElementById("tests");
    var app = document.createElement('div');
    app.setAttribute('id', 'app');
    div.appendChild(app);
    noteController.printNotes();
    assert.isTrue(app.innerHTML === "<ul><li><div>Favorite drink: seltzer</div></li></ul>");
  });

})(this);
