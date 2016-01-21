Template.kaartl.rendered = function() {
  this.autorun(function() {
  	var dot = document.querySelectorAll('.left-map svg g circle');
  	// var rect = document.querySelectorAll('#graph svg g rect');
  	// var text = document.querySelectorAll('#graph svg g text');

	var kaartGraphtl = new TimelineMax()
		.staggerFrom(dot , 0.006 , { 
			scale:0 , 
			transformOrigin: "left", 
			ease: Power2.easeOut, 
			y: 0},0.006);
  })
};

Template.kaartl.helpers({

});
Template.kaartl.events({
	'mouseover .map_svg>g' :function  (event,template) {
		$(".graph-container rect").attr("style", "fill: #656666;")
		$(".map_svg> g").attr("style", "fill-opacity: 0.5;")

		$("."+event.currentTarget.classList[0]).attr("style", "fill-opacity: 1;")
		assignGraphColor(event)
		//$(".graph_"+event.currentTarget.classList[0]).attr("style",$(event.currentTarget.firstElementChild.firstElementChild).attr('style') );
		//$(".graph_"+event.currentTarget.id).attr("class", "selected");
		//debugger
	},
	'mouseleave .kaart-img-wrap' :function  (event,template) {
		$(".map_svg> g").attr("style", "fill-opacity: 1;")
		// var rect = $(".graph-container rect")
		// $(".graph-container rect").attr("style", "fill: #656666;")
		
		//$(".graph_"+event.currentTarget.id).attr("class", "selected");
		//debugger .attr('fill', '')
	}
});
assignGraphColor = function (event) {
	var target = event.currentTarget.classList[0],
		chartColorsRed=mapColors.chartRed[target],//["#5B0000","#7C3333","#9D6666","#BE9999","#DECCCC"],
		chartColorsBlue=mapColors.chartBlue[target],
		chartColorsGreen=mapColors.chartGreen[target];//["#001C5B","#33497B","#66779C","#99A4BD","#CCD2DE"]
		//indexColorsBlue=["fill: rgb(0, 28, 91);","fill: rgb(51, 73, 123);","fill: rgb(102, 119, 156);","fill: rgb(190, 153, 153);","fill: rgb(222, 204, 204);"],
		//indexColorsRed=["fill: rgb(91, 0, 0);","fill: rgb(124, 51, 51);","fill: rgb(157, 102, 102);","fill: rgb(153, 164, 189);","fill: rgb(204, 210, 222);"];
	
	$("#graph .graph_"+target).attr("fill",chartColorsBlue ).attr("style","fill:"+chartColorsBlue );
	$("#graph2 .graph_"+target).attr("fill",chartColorsRed ).attr("style","fill:"+chartColorsRed );
	$("#graph3 .graph_"+target).attr("fill",chartColorsGreen ).attr("style","fill:"+chartColorsGreen );
}