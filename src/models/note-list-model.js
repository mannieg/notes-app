(function(exports) {

  function NoteList() {
    this.noteArray = [];
  }


  NoteList.prototype.storeNote = function (string) {
    this.noteArray.push(new Note(string));
  };

  NoteList.prototype.getNotes = function () {
    return this.noteArray;
  };

  if (typeof module !== 'undefined')
    module.exports = NoteList;
  else
    exports.NoteList = NoteList;

})(this);
