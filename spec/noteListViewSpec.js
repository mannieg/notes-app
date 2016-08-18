describe("Note List View", function() {

  it("takes a note list model upon instantiation", function() {
    var html = "<ul><li>Test 1</li></ul>";
    var note1 = new Note("Test 1");
    var list = new List();

    list.addNote(note1);
    var listView = new ListView(list);

    isTrue(listView.htmlList() === html);
  });
});
