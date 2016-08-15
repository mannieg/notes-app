(function(exports) {
  function NoteList() {
    this.noteArray = [];
  }
  NoteList.prototype.storeNote = function (note) {
    this.noteArray.push(note);
  };
  NoteList.prototype.getNotes = function () {
    return this.noteArray;
  };

  module.exports = NoteList;
})(this);
