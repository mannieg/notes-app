// function testExclaim() {
// if (exclaim("hi") !== "hi!!!!!") {
//   throw new Error("exclaiming hi should equal hi!!!!!");
// } else {
//   console.log("passed");
// }
// }
// testExclaim();
// (function(exports) {
//   var EXCLAMATION_MARK_COUNT = 5;
//
//   function exclaim(string) {
//     return string + "!".repeat(EXCLAMATION_MARK_COUNT);
//   }
//
//   exports.exclaim = exclaim;
// })(this);

(function(exports) {

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + " is NOT truthy");
    } else {
      console.log("tests passed");
    }
  }

  function isFalse(assertionToCheck) {
    if(assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + " is NOT falsy");
    }
  }

  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
})(this);
