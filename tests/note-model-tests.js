var assert = require("./assert");
var Note = require("../note-model");


function testNoteStoresText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.getText() === "My favourite language is JavaScript");
}

testNoteStoresText();
