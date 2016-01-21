Template.kaartr.rendered = function() {
  this.autorun(function() {
  	var dot = document.querySelectorAll('.right-map svg g circle');

	var kaart = new TimelineMax()
		.staggerFrom(dot , 0.006 , { 
			scale:0 , 
			transformOrigin: "left", 
			ease: Power2.easeOut, 
			y: 0},

		0.006);
  })
};

Template.kaartr.helpers({

});
Template.kaartr.events({
	'mouseover .map_svg>g' :function  (event,template) {
		$(".graph-container rect").attr("style", "fill: #656666;")
		$(".map_svg> g").attr("style", "fill-opacity: 0.5;")

		$("."+event.currentTarget.classList[0]).attr("style", "fill-opacity: 1;")
		assignGraphColor(event)
		var stadsdeel = event.currentTarget.classList[0]
		Session.set("stadsdeelL", stadsdeel);
		//$(".graph_"+event.currentTarget.classList[0]).attr("style",$(event.currentTarget.firstElementChild.firstElementChild).attr('style') );
		//$(".graph_"+event.currentTarget.id).attr("class", "selected");
		//debugger
	},
	'mouseout .map_svg>g' :function  (event,template) {
		// var rect = $(".graph-container rect")
		// $(".graph-container rect").attr("style", "fill: #656666;")
		
		//$(".graph_"+event.currentTarget.id).attr("class", "selected");
		//debugger .attr('fill', '')
	}
});