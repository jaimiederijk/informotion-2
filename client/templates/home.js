Template.home.rendered = function() {
  this.autorun(function() {
  	Session.set("rightMap", "kaartr");
  	Session.set("leftMap", "kaartl");
  	Session.set("rightGraph", "graph2");
  	Session.set("leftGraph", "graph");

    var conclusie = document.querySelector('.conclusie-wrapper');
    var pijll = document.querySelector('.material-icons.white.left');
    var pijlr = document.querySelector('.material-icons.white.right');

    var conclusietl = new TimelineMax()
      .from(conclusie, 1, {
        scale: 0,
        opacity:0,
        ease: Power1.easeOut,
        y: 500
      })
      .from(pijll, 1, {
        opacity:0, 
        ease: Power2.easeOut, 
        x:50
      }, 'label')
      .from(pijlr, 1, {
        opacity:0, 
        ease: Power2.easeOut, 
        x:5-50
      }, 'label');
      
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