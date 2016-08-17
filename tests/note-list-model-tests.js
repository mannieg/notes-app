(function(exports) {
  var noteList = new NoteList(Note);

  it("Note list can store notes", function() {
    noteList.storeNote("test");
    var arr = noteList.getNotes();

    for (var i = 0; i < arr.length; i++) {
      assert.isTrue( arr[i].text === "test");
      assert.isTrue( arr[i] instanceof Note );
    }
  });

})(this);
