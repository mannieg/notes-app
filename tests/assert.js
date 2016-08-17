(function(exports) {

  function it(name, block) {
    try {
      createListElement(name, "h5");
      block();
      createListElement("Passed test", "p", "green");
    } catch (error) {
      createListElement(error, "p", "red");
    }
  }

   function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is NOT truthy", true);
    }
  }

  function isFalse(assertionToCheck) {
    if(assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is NOT falsy", true);
    }
  }

  function createListElement(response, tag, color) {
    var div = document.getElementById("tests");
    var element = document.createElement(tag);
    element.appendChild(document.createTextNode(response));
    div.appendChild(element);

    if (color === "green")
      element.setAttribute('class', 'success');
    else if (color === "red")
      element.setAttribute('class', 'failed');
    else
      element.setAttribute('class', 'black');

  }

  exports.assert = {
    isTrue: isTrue,
    isFalse: isFalse
  };

  exports.it = it;

})(this);
