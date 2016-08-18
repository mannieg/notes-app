describe("Note Controller", function() {

  it("can instantiated a note controller", function() {
    var controller = new noteController();
    isTrue(controller instanceof noteController);
  });

  it("can display list content within app div", function() {
    var controller = new noteController();
    var div = document.createElement("div");
    div.setAttribute("id", "app");
    
    document.getElementById = function() {
      return div;
    }

    controller.displayList();
    document.getElementById = document.__proto__.getElementById;
  });

}); 
