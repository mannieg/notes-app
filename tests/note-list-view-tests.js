var modules = require("./modules");

var Note = modules.Note;
var NoteList = modules.NoteList;
var NoteView = modules.NoteView;
var assert = modules.assert;

function testNoteListDisplaysNotes() {

  var noteList = new NoteList(Note);
  noteList.storeNote("Pizza");
  var noteView = new NoteView(noteList);
  var htmlTest = "<ul><li><div>Pizza</div></li></ul>";
  assert.isTrue(noteView.getHTML() === htmlTest);
}

testNoteListDisplaysNotes();
