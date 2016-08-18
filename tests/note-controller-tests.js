(function(exports) {

  var noteController = new NoteController(NoteList);
  var note = new Note();
  var appDiv;

  function mockDom() {
    appDiv = document.createElement('div');
    appDiv.setAttribute('id', 'app');
    document.getElementById = function() {
      return appDiv;
    };
    location.hash = '#0'; //+ (note.id - 1);
  }

  function resetMockDom() {
    document.getElementById = document.__proto__.getElementById;
  }

  it("Can instantiate note controller", function() {
    assert.isTrue(noteController instanceof NoteController);
  });

  it("Can modify app dom", function() {
    mockDom();
    noteController.printNotes();
    resetMockDom();
    assert.isTrue(appDiv.innerHTML === "<ul><li><div><a href=\"#" + (note.id - 1) +
                  "\">Favorite drink: selt</a></div></li></ul>");
  });

  it("Shows note content on click", function() {
    mockDom();
    noteController.displayNote();
    console.log(appDiv.innerHTML);
    resetMockDom();
    assert.isTrue(appDiv.innerHTML === "<div>Favorite drink: seltzer</div>");
  });

})(this);
