(function(exports) {

  var noteController = new NoteController(NoteList);

  it("Can instantiate note controller", function() {
    assert.isTrue(noteController instanceof NoteController);
  });

  it("Can modify app dom", function() {
    var appDiv = document.createElement('div');
    appDiv.setAttribute('id', 'app');
    document.getElementById = function() {
      return appDiv;
    };
    noteController.printNotes();
    document.getElementById = document.__proto__.getElementById;
    assert.isTrue(appDiv.innerHTML === "<ul><li><div>Favorite drink: selt</div></li></ul>");
  });

})(this);
