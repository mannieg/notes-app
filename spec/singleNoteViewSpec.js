describe("Single Note View", function() {

  var note = new Note("Favourite drink: seltzer");
  var singleNoteView = new SingleNoteView(note);

  it("can be instantiated", function() {
    isTrue(singleNoteView instanceof SingleNoteView);
  });

  it("returns a interpolated html note string", function() {
    isTrue(singleNoteView.getNoteHtml() === "<div>Favourite drink: seltzer</div>");
  });


});
