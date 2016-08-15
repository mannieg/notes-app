(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.getHTML = function () {
    this.noteList.getNotes().forEach( function(current_value) {
      console.log(current_value.text);
    });
  };

  module.exports = NoteView;
})(this);
