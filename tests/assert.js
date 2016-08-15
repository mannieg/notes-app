(function(exports) {

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is NOT truthy");
    } 
  }

  exports.isTrue = isTrue;

})(this);
