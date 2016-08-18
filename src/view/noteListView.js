(function(exports) {

  function ListView(list) {
    this.currentList = list;
  }

  ListView.prototype.htmlList = function() {

    var listToHtml = this.currentList.getAllNotes();
    var mappedList = listToHtml.map(function(note) {
      var text = note.getText().substring(0, 19);
      return "<li>" + text + "</li>";
    });

    return '<ul>' + mappedList.join('') + '</ul>';
  }
  
  exports.ListView = ListView

})(this);
