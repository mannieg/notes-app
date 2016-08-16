(function(exports){

  function NoteController(NoteList){
    this._noteList = new NoteList(Note);
    console.log(this._noteList);
    this._noteList.storeNote("Favorite drink: seltzer");
    this._noteView = new NoteView(this._noteList);
  };

  NoteController.prototype.printNotes = function(){
    var app = document.getElementById('app');
    app.innerHTML = this._noteView.getHTML();
  };

  exports.NoteController = NoteController;

})(this);
