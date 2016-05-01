var appModel = new AppModel();

var appView = new AppView({ model: appModel });

var registerView = new RegisterView();

appModel.get('beers').fetch({success: function () {
  var beerRouter = new BeerRouter();
  Backbone.history.start();
}}, {reset: true});
