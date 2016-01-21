Template.layout.helpers({
  disabled : function(e) {
    //JSON.parse('{"map":"kaartl","graph":"graph"}').map
    if (e===Session.get("rightMap")||e===Session.get("leftMap")) {
      return "disabled"
    };  
  }
});

Template.layout.events({
	'change .select-kaart-button-r': function(event, template) {
    //JSON.parse('{"map":"kaartl","graph":"graph"}').map
    var val = JSON.parse(event.target.value)
    Session.set("rightMap", val.map);
    Session.set("rightGraph", val.graph);
  },
  'change .select-kaart-button-l': function(event, template) {
    var val = JSON.parse(event.target.value)
    Session.set("leftMap",  val.map);
    Session.set("leftGraph", val.graph);
  }
});