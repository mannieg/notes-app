(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.getHTML = function () {
    console.log(this.noteList);
    for(var note in this.noteList.getNotes) {
      return "note";
    }
  };

  module.exports = NoteView;
})(this);
