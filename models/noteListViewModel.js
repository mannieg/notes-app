(function(exports) {
  function NoteListView(notelist) {
    this._noteList = notelist;
  }
  NoteListView.prototype.getNoteList = function () {
    return this._noteList;
  };


  NoteListView.prototype.getHTML = function () {
    var markup = '<ul><li><div><a href="#';
    var notes_array = this._noteList.getNotes();
    if (notes_array.length === 0) {
      return "";
    } else {
      markup += notes_array.map(function(note) {
        var note_id = note.id + '">' + note.getText().substr(0,20);
        return note_id;
      }).join('</a></div></li><li><div><a href="#');
      return markup += '</a></div></li></ul>';
    }
  };


  exports.NoteListView = NoteListView;
})(this);
