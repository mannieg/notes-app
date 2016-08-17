(function(exports) {

  function Note(text) {
    this.text = text;
  }

  Note.prototype.getNote = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
