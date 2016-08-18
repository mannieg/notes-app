(function(exports) {

  var listView, note, list, singleNoteView;

  function noteController() {
    list = new List();
    note = new Note("Favourite drink: seltzer");
    list.addNote(note);
    list.addNote(new Note("Hello world!"));

    listView = new ListView(list);

    window.addEventListener("hashchange", this.displayNote);
  }

  noteController.prototype.displayList = function() {
    document.getElementById("app").innerHTML = listView.htmlList();
  };

  noteController.prototype.displayNote = function() {
    document.getElementById('app').innerHTML = getSingleNote();
  };

  function getSingleNote() {
    var note = list.getAllNotes()[getIdFromUrl(window.location)];
    singleNoteView = new SingleNoteView(note);
    return singleNoteView.getNoteHtml();
  }

  function getIdFromUrl(location) {
    return location.hash.split('#')[1];
  }


  exports.noteController = noteController;
})(this);
