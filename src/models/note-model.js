(function (exports) {

  var idCounter  = 0;

  function Note(string) {
    this.text = string;
    this.id = idCounter++;
  }

  Note.prototype.getText = function() {
    return this.text;
  };

  if (typeof module !== 'undefined')
    module.exports = Note;
  else
    exports.Note = Note;

})(this);
