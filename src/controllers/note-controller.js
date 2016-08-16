(function(exports){

  function NoteController(NoteList, Note, NoteView){
    this._noteList = new NoteList(Note);
    this._noteList.storeNote("Favorite drink: seltzer");
    this._noteView = new NoteView(this._noteList);
  }

  NoteController.prototype.printNotes = function(){
    document.getElementById('app').innerHTML = this._noteView.getHTML();
  };

  if (typeof module !== 'undefined')
    module.exports = NoteController;
  else
    exports.NoteController = NoteController;

})(this);
