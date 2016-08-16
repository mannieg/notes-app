var modules = require('./modules');

var assert = modules.assert;
var Note = modules.Note;
var NoteList = modules.NoteList;
var NoteController = modules.NoteController;
var NoteView = modules.NoteView;

// Custom Mocks of the document at global scope
var app = {innerHTML: ""};
function Document() {}
Document.prototype.getElementById = function(id) {return app;};
document = new Document();

var noteController = new NoteController(NoteList, Note, NoteView);

function canInstantiateNoteController() {
  assert.isTrue(noteController instanceof NoteController);
}

function canModifyAppDom() {
    noteController.printNotes();
    assert.isTrue(app.innerHTML === "<ul><li><div>Favorite drink: seltzer</div></li></ul>");
}

canInstantiateNoteController();
canModifyAppDom();
