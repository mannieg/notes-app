(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.getHTML = function () {
    var html = "<ul>";
    this.noteList.getNotes().forEach( function(current_value) {
      html += "<li><div>" + current_value.text.substring(0,20) + "</div></li>";
    });
    return html + "</ul>";
  };

  if (typeof module !== 'undefined')
    module.exports = NoteView;
  else
    exports.NoteView = NoteView;

})(this);
