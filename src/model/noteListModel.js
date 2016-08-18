(function(exports) {

  function List() {
    this.idCounter = 0;
    this.listNotes = [];
  }

  List.prototype.addNote = function(note) {
    note.id = this.idCounter++;
    this.listNotes.push(note);
  };

  List.prototype.getAllNotes = function() {
    return this.listNotes;
  };

  exports.List = List;
})(this);
