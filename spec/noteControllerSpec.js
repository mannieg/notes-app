describe("Note Controller", function() {
  var div;

  var mockAppDiv = function() {
    div = document.createElement("div");
    div.setAttribute("id", "app");

    document.getElementById = function() {
      return div;
    };
  };

  var resetMockAppDiv = function() {
    document.getElementById = document.__proto__.getElementById;
  };

  it("can instantiated a note controller", function() {
    var controller = new noteController();
    isTrue(controller instanceof noteController);
  });

  it("can display list content within app div", function() {
    var controller = new noteController();
    mockAppDiv();
    controller.displayList();
    isTrue(div.innerHTML === '<ul><li><a href="#0">Favourite drink: se</a></li></ul>');
    resetMockAppDiv();
  });

  it("shows the full note when clicked", function() {
    var controller = new noteController();
    var note = new Note("Hello World!");
    var list = new List(note);
    mockAppDiv();
    location.hash = '#0';
    controller.displayNote();
    history.pushState('', document.title, window.location.pathname);
    isTrue(div.innerHTML === "<div>Favourite drink: seltzer</div>");
    resetMockAppDiv();
  });

});
