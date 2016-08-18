(function(exports) {
  
  var listView;

  function noteController() {
    var list = new List();
    var note = new Note("Favourite drink: seltzer");
    
    list.addNote(note);

    listView = new ListView(list);
  }

  noteController.prototype.displayList = function() {
    document.getElementById("app").innerHTML = listView.htmlList();
  }
  
  exports.noteController = noteController;
})(this);
