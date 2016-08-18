(function(exports) {
  function List() {
    this.listNotes = [];
  }

  List.prototype.addNote = function(note) {
    this.listNotes.push(note);
  }

  List.prototype.getAllNotes = function() {
    return this.listNotes;
  }

  exports.List = List;
})(this);
