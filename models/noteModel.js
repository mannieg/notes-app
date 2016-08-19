(function(exports) {
  function Note(string, id) {
    this.text = string || "";
    this.id = id;
  }
  Note.prototype.getText = function () {
    return this.text;
  };

  exports.Note = Note;
})(this);
