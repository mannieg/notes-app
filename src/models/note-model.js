(function (exports) {

  function Note(string) {
    this.text = string;
  }

  Note.prototype.getText = function() {
    return this.text;
  };

  if (typeof module !== 'undefined')
    module.exports = Note;
  else
    exports.Note = Note;

})(this);
