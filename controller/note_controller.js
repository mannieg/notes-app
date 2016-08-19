(function(exports) {
  function NoteController(noteList) {
    this._noteList = noteList;
    this._note_markup = "";
    this._singleNoteView = "";
    window.addEventListener("hashchange", this.insertNoteHTML);
  }

  NoteController.prototype.setupView = function () {
    var list_view = new NoteListView(this._noteList);
    var note_markup = list_view.getHTML();
    this._note_markup = note_markup;
  };

  NoteController.prototype.insertHTML = function (id) {
    var element = document.getElementById(id);
    element.innerHTML = this._note_markup;
  };

  NoteController.prototype.insertNoteHTML = function () {
    console.log("Triggered");
    var hashNumber = location.hash.split("#")[1];
    // debugger;
    this.singleN;
    var element = document.getElementById("app");
    element.innerHTML = this._singleNoteView;
  };

  NoteController.prototype.singleN = function (id) {
    var single_note = this._noteList.getNotes()[id]
    this._singleNoteView = new SingleNoteView(single_note).getNoteHTML();
  };



  // window.addEventListener("hashchange", insertNoteHTML);

  exports.NoteController = NoteController;
})(this);
