var modules = require("./modules");

var Note = modules.Note;
var NoteList = modules.NoteList;
var NoteView = modules.NoteView;
var assert = modules.assert;

var noteList = new NoteList(Note);
var noteView = new NoteView(noteList);

function testNoteListReturnsEmptyList() {
  var htmlTest = "<ul></ul>";
  assert.isTrue(noteView.getHTML() === htmlTest);
}

function testNoteListDisplayANote() {
  noteList.storeNote("Pizza");
  var htmlTest = "<ul><li><div>Pizza</div></li></ul>";
  assert.isTrue(noteView.getHTML() === htmlTest);
}

function testNoteListDisplayesMultipleNotes() {
  noteList.storeNote("Pasta");
  noteList.storeNote("Cake");
  var htmlTest = "<ul><li><div>Pizza</div></li><li><div>Pasta</div></li><li><div>Cake</div></li></ul>";
  assert.isTrue(noteView.getHTML() === htmlTest);
}

testNoteListReturnsEmptyList();
testNoteListDisplayANote();
testNoteListDisplayesMultipleNotes();
