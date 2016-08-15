var modules = require("./modules");

var Note = modules.Note;
var NoteList = modules.NoteList;
var NoteView = modules.NoteView;

function testNoteListDisplaysNotes() {

  var noteList = new NoteList(Note);
  noteList.storeNote("Pizza");
  var noteView = new NoteView(noteList);
  var htmlTest = "<li><div>Pizza</div></li>";
  //assert.isTrue(noteView.getHTML() === htmlTest);
  noteView.getHTML();
}

testNoteListDisplaysNotes();
