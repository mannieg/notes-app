'use strict';

var note = new require('./note-model');
var assert = require('./assert');

function storesTextOfNote(){
  var new_note = note;
  var text = 'text';
  assert.isTrue(new_note.text = text);
};

storesTextOfNote();
