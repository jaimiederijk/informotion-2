Template.kaartl.helpers({

});
Template.kaartl.events({
	'mouseover .map_svg>g' :function  (event,template) {
		$(".graph-container rect").attr("style", "fill: #656666;")
		$(".map_svg> g").attr("style", "fill-opacity: 0.4;")

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
assignGraphColor = function (event) {
	var target = event.currentTarget.classList[0],
		chartColorsRed=mapColors.red,//["#5B0000","#7C3333","#9D6666","#BE9999","#DECCCC"],
		chartColorsBlue=mapColors.blue,//["#001C5B","#33497B","#66779C","#99A4BD","#CCD2DE"]
		indexColorsBlue=["fill: rgb(0, 28, 91);","fill: rgb(51, 73, 123);","fill: rgb(102, 119, 156);","fill: rgb(190, 153, 153);","fill: rgb(222, 204, 204);"],
		indexColorsRed=["fill: rgb(91, 0, 0);","fill: rgb(124, 51, 51);","fill: rgb(157, 102, 102);","fill: rgb(153, 164, 189);","fill: rgb(204, 210, 222);"];
	//debugger

	var redIndex = indexColorsRed.indexOf($(event.currentTarget.firstElementChild.firstElementChild).attr('style'))
	var blueIndex = indexColorsBlue.indexOf($(event.currentTarget.firstElementChild.firstElementChild).attr('style'))
	var index=0;
	if (redIndex>-1) {
		index=redIndex;
	} else if (blueIndex>-1) {
		index=blueIndex;
	};
	$("#graph .graph_"+target).attr("fill",chartColorsBlue[index] ).attr("style","fill:"+chartColorsBlue[index] );
	$("#graph2 .graph_"+target).attr("fill",chartColorsRed[index] ).attr("style","fill:"+chartColorsRed[index] );
}