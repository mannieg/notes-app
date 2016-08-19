var note_list, controller, appElement;
function setupController() {
  note_list = new NoteList();
  controller = new NoteController(note_list);
}

function setupElement() {
  appElement = document.getElementById("app");
}
// start of tests
describe("Controller", function() {
  it("can be instantiated with a note list", function() {
    setupController();
    assert.isTrue(controller._noteList === note_list);
  });

  it("can return a note form within the note list", function() {
    setupController();
    note_list.addNote("Favourite drink: seltzer");
    assert.isTrue(note_list.getNotes()[0].getText() === 'Favourite drink: seltzer');
  });


  it("converts list_view into HTML and store it", function () {
    setupController();
    note_list.addNote("Favourite drink: seltzer");
    controller.setupView();
    assert.isTrue(controller._note_markup === '<ul><li><div><a href="#0">Favourite drink: sel</a></div></li></ul>' );
  });

  it("can return note's text formatted in HTML", function () {
    setupController();
    note_list.addNote("Favourite drink: seltzer");
    controller.setupView();

    var appDiv = document.createElement('div', {id: 'app'} );
    document.getElementById = function () {
      return appDiv;
    }

    controller.insertHTML('app');

    setupElement();
    assert.isTrue(appElement.innerHTML === controller._note_markup);
  });

  it("Changes app div according to url", function() {
    setupController();
    note_list.addNote("Favourite drink: seltzer");
    location.hash = "#0"

    setupElement();
    assert.isTrue(appElement.innerHTML === '<div>Favourite drink: seltzer</div>');
  });

});
