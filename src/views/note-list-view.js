(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.getHTML = function () {
    var html = "<ul>";
    this.noteList.getNotes().forEach( function(current_value) {
      html += "<li><div>" + current_value.text + "</div></li>";
    });
    return html + "</ul>";
  };

  module.exports = NoteView;
})(this);
