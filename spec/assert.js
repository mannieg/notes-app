(function(exports) {


  function it(name, block) {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
  }

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is NOT truthy");
    }
  }

  function isFalse(assertionToCheck) {
    if(assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is NOT falsy");
    }
  }

  exports.isTrue = isTrue;
  exports.isFalse = isFalse;

})(this);
