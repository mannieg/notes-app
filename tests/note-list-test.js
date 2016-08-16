var assert = require("./assert");
var Note = require("../models/note-model");
var NoteList = require("../models/note-list-model");

(function (exports) {
  var list = new NoteList;

  function testNoteListAcceptsNote() {
    list.addNote("test text");
    assert.isTrue(list.getNotesArray === "test text");
  };

  exports.testNoteListAcceptsNote = testNoteListAcceptsNote;

})(this);

this.testNoteListAcceptsNote()
