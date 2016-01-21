Template.kaartr.helpers({

});
Template.kaartr.events({
	'mouseover .map_svg>g' :function  (event,template) {
		$(".graph-container rect").attr("style", "fill: #656666;")
		$(".map_svg> g").attr("style", "fill-opacity: 0.5;")

		$("."+event.currentTarget.classList[0]).attr("style", "fill-opacity: 1;")
		assignGraphColor(event)
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