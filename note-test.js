// var exclaim = require("./note-model").exclaim;
//
// function testExclaim() {
// if (exclaim("hi") !== "hi!!!!!") {
//   throw new Error("exclaiming hi should equal hi!!!!!");
// } else {
//   console.log("passed");
// }
// }
// testExclaim();

var note = require("./note-model");

function testNoteHasText() {
  var noteTest = new Note("My favourite language is JavaScript");

  if (noteTest.getText !== "My favourite language is JavaScript") {
    throw new Error("expecting 'My favourite language is JavaScript'");
  } else {
    console.log("passed");
  }
}
testNoteHasText();
