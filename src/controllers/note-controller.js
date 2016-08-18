(function(exports){

  var noteView, noteList;

  function NoteController(NoteList){
    noteList = new NoteList();
    noteList.storeNote("Favorite drink: seltzer");
    noteView = new NoteView(noteList);
    window.addEventListener("hashchange", this.displayNote);
  }

  NoteController.prototype.printNotes = function(){
    document.getElementById('app').innerHTML = noteView.getHTML();
  };

  NoteController.prototype.displayNote = function() {
    document.getElementById('app').innerHTML = getNote();
  }

  function getNote() {
    var singleNote = new SingleNoteView(noteList.getNotes()[getUrlId()]);
    return singleNote.getNote();
  }

  function getUrlId() {
    return location.hash.split('#')[1];
  }

  if (typeof module !== 'undefined')
    module.exports = NoteController;
  else
    exports.NoteController = NoteController;

})(this);
