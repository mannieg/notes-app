module.exports = {
   assert: require("./assert"),
   Note : require('../src/models/note-model'),
   NoteList : require('../src/models/note-list-model'),
   NoteView : require("../src/views/note-list-view"),
   NoteController : require('../src/controllers/note-controller')
};
