Template.home.rendered = function() {
  this.autorun(function() {
  	Session.set("rightMap", "kaartr");
  	Session.set("leftMap", "kaartl");
  	Session.set("rightGraph", "graph2");
  	Session.set("leftGraph", "graph");

    // Session.set("stadsdeelL", "");
    // Session.set("stadsdeelR", "");
    // Session.set("stadsdeel3", "");


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
  stadsdeelInfoL: function () {
      var stadsdeelL = Session.get('stadsdeelL');
      var stadsdeelR = Session.get('stadsdeelR');
      var stadsdeel3 = Session.get('stadsdeel3');
      var links = Session.get('leftMap');
      var rechts = Session.get('rightMap');
      
      if (stadsdeelL===""){
        return
      }
      if (links==="kaartl") {//schoon
        var avgData;
        var cleanData=Session.get('graph1Data');
        for (var i = 0; i < cleanData.length; i++) {
          if (cleanData[i].name===stadsdeelL) {
            avgData=cleanData[i].avg
          }
        };
        return  "Gemiddeld vindt men dat " + stadsdeelL + " een " +avgData + " verdiend als het gaat om hoe schoon het is.";
      } else if (links==="kaartr") {//airbnb

        return stadsdeelR +"De gemiddelde airbnb prijs in dit gebied is" +Chartdata.findOne({name:"hotelData"}).hotelData[stadsdeelR][1].prijs
      } else if (links==="kaart3") {//woningwaarde
        var woonData;
        var cleanData=Chartdata.findOne({name:"Woonwaarde"}).gemWoonwaarde;
        for (var i = 0; i < cleanData.length; i++) {
          if (cleanData[i].stadsdeel===stadsdeel3) {
            woonData=cleanData[i].waarde
          }
        };
        return stadsdeel3 +" heeft een gemiddelde woningwaarde van \u20AC"+woonData+"."
      }

  },
  stadsdeelInfoR: function () {
      var stadsdeelL = Session.get('stadsdeelL');
      var stadsdeelR = Session.get('stadsdeelR');
      var stadsdeel3 = Session.get('stadsdeel3');
      var links = Session.get('leftMap');
      var rechts = Session.get('rightMap');

      if (stadsdeelL===""){
        return
      }
      if (rechts==="kaartl") {//schoon
        var avgData;
        var cleanData=Session.get('graph1Data');
        for (var i = 0; i < cleanData.length; i++) {
          if (cleanData[i].name===stadsdeelL) {
            avgData=cleanData[i].avg
          }
        };
        return  "Gemiddeld vindt men dat " + stadsdeelL + " een " + Math.round(avgData) + " verdiend als het gaat om hoe schoon het is.";
      } else if (rechts==="kaartr") {//airbnb

        return stadsdeelL +" De gemiddelde airbnb prijs in dit gebied is \u20AC " +Chartdata.findOne({name:"hotelData"}).hotelData[stadsdeelL][1].prijs
      } else if (rechts==="kaart3") {//woningwaarde
        var woonData;
        var cleanData=Chartdata.findOne({name:"Woonwaarde"}).gemWoonwaarde;
        for (var i = 0; i < cleanData.length; i++) {
          if (cleanData[i].stadsdeel===stadsdeelL) {
            woonData=cleanData[i].waarde
          }
        };
        return stadsdeelL +" heeft een gemiddelde woningwaarde van \u20AC"+woonData+"."
      }

  },
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