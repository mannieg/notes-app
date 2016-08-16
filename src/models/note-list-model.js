(function(exports) {
  function NoteList(Note) {
    this.noteArray = [];
    this.Note = Note;
  }

  NoteList.prototype.storeNote = function (string) {
    this.noteArray.push(new this.Note(string));
  };

  NoteList.prototype.getNotes = function () {
    return this.noteArray;
  };

  if (typeof module !== 'undefined')
    module.exports = NoteList;
  else
    exports.NoteList = NoteList;

})(this);
