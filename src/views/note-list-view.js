(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.getHTML = function () {
    for(var note in this.noteList.getNotes) {
      return "note";
    }
  };
  modules.exports = NoteView;
})
