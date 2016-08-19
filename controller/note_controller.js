(function(exports) {

  var singleNoteView, notelist, noteMarkup;

  function NoteController(noteListObject) {
    noteList = noteListObject;
    this._note_markup = "";
    this._singleNoteView = "";
    window.addEventListener("hashchange", this.displayNote);
  }

  NoteController.prototype.setupView = function () {
    var list_view = new NoteListView(noteList);
    var note_markup = list_view.getHTML();
    noteMarkup = note_markup;
  };

  NoteController.prototype.insertHTML = function () {
    var element = document.getElementById('app');
    element.innerHTML = noteMarkup;
  };

  NoteController.prototype.displayNote = function() {
    document.getElementById('app').innerHTML = getSingleNote();
  };

  function getSingleNote() {
    var note = noteList.getNotes()[getIdFromUrl(window.location)];
    singleNoteView = new SingleNoteView(note);
    return singleNoteView.getNoteHTML();
  }

  function getIdFromUrl(location) {
    return location.hash.split('#')[1];
  }


  exports.NoteController = NoteController;

})(this);
