(function(exports){

  function NoteController(NoteList, Note, NoteView){
    var noteList = new NoteList(Note);
    noteList.storeNote("Favorite drink: seltzer");
    this.noteView = new NoteView(noteList);
  }

  NoteController.prototype.printNotes = function(){
    document.getElementById('app').innerHTML = this.noteView.getHTML();
  };

  if (typeof module !== 'undefined')
    module.exports = NoteController;
  else
    exports.NoteController = NoteController;

})(this);
