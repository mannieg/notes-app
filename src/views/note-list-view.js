(function(exports) {
  function NoteView(noteList) {
    this.noteList = noteList;
  }

  NoteView.prototype.getHTML = function () {
    var html = "<ul>";
    this.noteList.getNotes().forEach( function(current_value) {
      html += "<li><div><a href=\"#" + current_value.id + "\">" +
              current_value.text.substring(0,20) + "</a></div></li>";
    });
    return html + "</ul>";
  };

  if (typeof module !== 'undefined')
    module.exports = NoteView;
  else
    exports.NoteView = NoteView;

})(this);
