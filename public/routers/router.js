var BeerRouter = Backbone.Router.extend({
  routes: {
    'beers/:id': 'showReviews',
    'register': 'renderRegister',
    '*default': 'showBeers'
  },

  showReviews: function (id) {
    var allBeers = appModel.get('beers');

    var currentBeer = allBeers.findWhere({ _id: id });

    appModel.set('current_beer', currentBeer);
    appModel.set('view', true);
  },

  showBeers: function () {
    appModel.set('show_reviews', false);
  },

  renderRegister: function () {
  appModel.set('view', 'register');
}
});