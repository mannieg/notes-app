(function(exports) {
  function List() {
    this.listNotes = [];
  }

  List.prototype.addNote = function(text) {
    var note = new Note(text);
    this.listNotes.push(note);
  }

  List.prototype.getList = function() {
    return this.listNotes;
  }

  exports.List = List;
})(this);
