(function(exports) {

  function NoteList() {
    this._allNotes = [];
    this.noteCounter = 0;
  }

NoteList.prototype.addNote = function (string) {
  var id = this.noteCounter++;
  var note = new Note(string, id);
  this._allNotes.push(note);

};

NoteList.prototype.getNotes = function () {
  return this._allNotes;
};

  exports.NoteList = NoteList;
})(this);
