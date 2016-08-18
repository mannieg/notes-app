(function(exports) {

  var idCounter = 0;

  function Note(text) {
    this.text = text;
    this.id = idCounter++;
  }

  Note.prototype.getText = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
