(function(exports) {

  var noteController = new NoteController(NoteList);

  it("can instantiate note controller", function() {
    assert.isTrue(noteController instanceof NoteController);
  });

  it("can modify app dom", function() {
    var appDiv = document.createElement('div');
    appDiv.setAttribute('id', 'app');
    document.getElementById = function() {
      return appDiv;
    };
    noteController.printNotes();
    document.getElementById = document.__proto__.getElementById;
    assert.isTrue(appDiv.innerHTML === "<ul><li><div>Favorite drink: seltzer</div></li></ul>");
  });

})(this);
