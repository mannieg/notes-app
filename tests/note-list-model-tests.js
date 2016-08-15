var assert = require("./assert");
var Note = require("../models/note-model");
var NoteList = require("../models/note-list-model");

function testNoteListStoresNotes() {
  var note = new Note("blah");
  var noteList = new NoteList();
  noteList.storeNote(note);
  console.log(noteList.getNotes());
  console.log([note]);
  assert.isTrue(noteList.getNotes() === [note]);
}

testNoteListStoresNotes();
