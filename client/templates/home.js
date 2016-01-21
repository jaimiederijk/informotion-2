Template.home.rendered = function() {
  this.autorun(function() {
  	Session.set("rightMap", "kaartr");
  	Session.set("leftMap", "kaartl");
  	Session.set("rightGraph", "graph2");
  	Session.set("leftGraph", "graph");
  })
};
Template.home.helpers({
  whichOneLeft: function () {
  	//kaartl kaartr kaart3
    return Session.get('leftMap')
  },
  whichOneRight: function () {
  	//kaartl kaartr kaart3
    return Session.get('rightMap')
  },
  whichGraphLeft: function () {
  	//kaartl kaartr kaart3
    return Session.get('leftGraph')
  },
  whichGraphRight: function () {
  	//kaartl kaartr kaart3
    return Session.get('rightGraph')
  }
});