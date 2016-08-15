var modules = require("./modules");

var Note = modules.Note;
var assert = modules.assert;


function testNoteStoresText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.getText() === "My favourite language is JavaScript");
}


testNoteStoresText();
