var assert = require("./assert");
var Note = require("../models/note-model").Note;
var NoteList = require("../models/note-list-model").NoteList;

(function (exports) {
  var list = new NoteList;

  function testNoteListAcceptsNote() {
    list.addNote("test text");
    var notesArray = list.getNotesArray;
    assert.isTrue(notesArray[0] === "test text");
  };

  exports.testNoteListAcceptsNote = testNoteListAcceptsNote;

})(this);

this.testNoteListAcceptsNote()
