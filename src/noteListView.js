(function(exports) {

  function ListView(list) {
    this.listView = list;
  }

  ListView.prototype.htmlList = function() {
    var listToHtml = this.listView.getList();

    var mappedList = listToHtml.map(function(note) {
      return "<li>" + note.getNote().text + "</li>";
    });
    
    return '<ul>' + mappedList.join('') + '</ul>';
  }

  exports.ListView = ListView

})(this);
