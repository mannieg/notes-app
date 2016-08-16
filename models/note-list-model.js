(function (exports) {

  function NoteList() {
    this.notesArray = [];
  }

  NoteList.prototype.addNote = function(text) {
    this.notesArray.push(text);
  };
  exports.NoteList = NoteList;
})(this);
