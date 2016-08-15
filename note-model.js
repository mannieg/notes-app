// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5;
//
//   function exclaim(string) {
//     return string + "!".repeat(EXCLAMATION_MARK_COUNT);
//   }
//   exports.exclaim = exclaim;
// })(this);
var note = new Note();


  function Note(text) {
    this.text = text;
  }

  Note.prototype.getText = function() {
    return this.text;
  };
