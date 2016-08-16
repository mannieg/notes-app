var assert = require("./assert");
var Note = require("../models/note-model");

(function(exports) {
  var note = new Note("My favourite language is JavaScript");

  function testNoteHasText() {
    assert.isTrue(note.getText() === "My favourite language is JavaScript");
  };

  exports.testNoteHasText = testNoteHasText;
})(this);

this.testNoteHasText()
