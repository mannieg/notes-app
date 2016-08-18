describe("Note List View", function() {

  var list, html, note0;

  var beforeEach = function() {
    html = "<ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li></ul>";
    note0 = new Note("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    list = new List();
    listView = new ListView(list);
  }

  it("takes a note list model upon instantiation", function() {
    beforeEach();
    var note1 = new Note("Lorem ipsum dolor sit amet");
    list.addNote(note1);
    isTrue(listView.htmlList() == ('<ul><li><a href="#' + note1.id + '">'
                                    + note1.getText().substring(0, 19)
                                    + '</a></li></ul>'));
  });

  it("truncate text to 20 lines", function() {
    beforeEach();
    list.addNote(note0);
    isTrue(listView.htmlList().length === 54);
  });

  it("each note has a unique url with id", function() {
    beforeEach();
    var note2 = new Note("This is an example");
    list.addNote(note2);
    isTrue(listView.htmlList() === '<ul><li><a href="#' + note2.id + '">This is an example</a></li></ul>');
  });

});
