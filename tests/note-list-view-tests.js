var assert = require("./assert");
var Note = require("../src/models/note-model");
var NoteList = require("../src/models/note-list-model");
var NoteView = require("../src/views/note-list-view");

function testNoteListDisplaysNotes() {

  var noteList = new NoteList();
  noteList.storeNote(Note, "Pizza");
  var noteView = new NoteView(noteList);
  var htmlTest = "<li><div>Pizza</div></li>";
  //assert.isTrue(noteView.getHTML() === htmlTest);
  console.log(noteView.getHTML());
}
