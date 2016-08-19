var note_list, controller, appDiv;

function setupController() {
  note_list = new NoteList();
  controller = new NoteController(note_list);
}

function mockAppDiv() {
  appDiv = document.createElement('div', {id: 'app'} );

  document.getElementById = function () {
    return appDiv;
  };
}
// start of tests
describe("Controller", function() {
  it("can be instantiated as a new controller", function() {
    setupController();
    assert.isTrue(controller instanceof NoteController);
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
    mockAppDiv();
    controller.insertHTML();
    assert.isTrue(appDiv.innerHTML === '<ul><li><div><a href="#0">Favourite drink: sel</a></div></li></ul>' );
  });

  it("can return note's text formatted in HTML", function () {
    setupController();
    note_list.addNote("Favourite drink: seltzer");
    controller.setupView();
    mockAppDiv();
    controller.insertHTML('app');

    mockAppDiv();
    assert.isTrue(appDiv.innerHTML === controller._note_markup);
  });

  it("Changes app div according to url", function() {
    setupController();
    note_list.addNote("Favourite drink: seltzer");
    mockAppDiv();
    location.hash = "#0";
    setTimeout(function() {
              assert.isTrue(appDiv.innerHTML === '<div>Favourite drink: seltzer</div>');
            }, 3000
          );
  });

});
