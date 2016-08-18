(function(exports) {

  var listView, note, list, singleNoteView;

  function noteController() {
    list = new List();
    listView = new ListView(list);

    window.addEventListener("hashchange", this.displayNote);

    addSubmitEvent();
  }

  noteController.prototype.displayList = function() {
    document.getElementById("app").innerHTML = listView.htmlList();
  };

  noteController.prototype.displayNote = function() {
    document.getElementById('app').innerHTML = getSingleNote();
  };

  function addSubmitEvent() {
    if(document.getElementById('submit') !== null)
      document.getElementById('submit').addEventListener("click", function(event) {
        onSubmit(event);
      }, true);
  }

  function onSubmit(event) {
    event.preventDefault();
    console.log(event);
    console.dir(event.path[0].form[0].value);
  }

  function getSingleNote() {
    var note = list.getAllNotes()[getIdFromUrl(window.location)];
    singleNoteView = new SingleNoteView(note);
    return singleNoteView.getNoteHtml();
  }

  function getIdFromUrl(location) {
    return location.hash.split('#')[1];
  }


  exports.noteController = noteController;
})(this);
