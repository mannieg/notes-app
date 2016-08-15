// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5;
//
//   function exclaim(string) {
//     return string + "!".repeat(EXCLAMATION_MARK_COUNT);
//   }
//   exports.exclaim = exclaim;
// })(this);

(function (exports) {

  function Note(string) {
    this.text = string;
  }

  Note.prototype.getText = function() {
    return this.text;
  };
  module.exports = Note;
})(this);
