var modules = require("./modules");

var Note = modules.Note;
var NoteList = modules.NoteList;
var assert = modules.assert;

var noteList = new NoteList(Note);

function testNoteListStoresNotes() {
  noteList.storeNote("test");
  var arr = noteList.getNotes();

  for (var i = 0; i < arr.length; i++) {
    assert.isTrue( arr[i].text === "test");
    assert.isTrue( arr[i] instanceof Note );
  }
}

testNoteListStoresNotes();
