(function(exports) {

  var note;

  function SingleNoteView(noteModel) {
    note = noteModel;
  }

  SingleNoteView.prototype.getNoteHtml = function() {
    return "<div>" + note.getText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
