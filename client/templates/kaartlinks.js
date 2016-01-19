Template.kaartl.helpers({

});
Template.kaartl.events({
	'mouseover .map_svg>g' :function  (event,template) {
		$(".graph-container rect").attr("style", "fill: #656666;")
		$(".graph_"+event.currentTarget.id).attr("style",$(event.currentTarget.firstElementChild.firstElementChild).attr('style') );
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