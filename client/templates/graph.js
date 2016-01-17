Template.graph.helpers({
	chart:function(){
		return "graph"
	}

});
Meteor.subscribe('chartdata', function() {
	var graphData = Chartdata.findOne({name:"schoonheidsgraden"}).schoonheidsgraden
	function barGraph () {
		//debugger
		// var devide = options.devide,
	 //    	dataMax = options.max,
		// 	
			// xAxisData = options.xAxisData,
			// yAxisData = options.yAxisData,
			// yAxisDataTwo = options.yAxisDataTwo,
			// yAxisDataThree = options.yAxisDataThree,
			// factor = options.factor,
			// yAxisName = options.yAxisName,
			
	    	var width = 1000,
	    	// graphData = Chartdata.findOne({name:"schoonheidsgraden"}).schoonheidsgraden,
	    	height = 600,
	    	cityParts=["weteringenschans","westerlijke-eilanden","jordaan",
	    				"grachtengordel-west","grachtengordel-zuid","plantage",
	    				"burgwallen-nieuwe-zijde","kadijken","nieuwmarkt",
	    				"burgwallen-oost-zijde"];

	    var avgData =[];

	    for (var i = 0; i < cityParts.length; i++) {
	    	var avgCityPart=0;
	    	var part = cityParts[i];
	    	var cityPartData = graphData[i].subparts;
	    	
	    	for (var t = 0; t < cityPartData.length; t++) {
	    		
	    		
	    		avgCityPart+=cityPartData[t].grade;
	    	};
	    	
	    	avgCityPart = avgCityPart/cityPartData.length;
	    	avgData.push({"avg":avgCityPart,"name":part});
	    };
		
	    
		// maak een schaal voor de breedte
		var xScale = d3.scale.ordinal()
			.domain(avgData.map(function(d) { return d.avg; }))
			.rangeRoundBands([0, width], .2);

		// maak een schaal voor de kleur
		var yScale = d3.scale.linear()
			.domain([0, d3.max(avgData, function(d){
	        return d.avg;
	      
	    })])
			.range([ height,0]);

		var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")

		var yAxis = d3.svg.axis()
				.scale(yScale)
				.orient("left")
				.tickFormat(function(d) { return d ; });

		// selecteer lege svg en maak vaste hoogtes en breetes
		var svg = d3.select("#graph").append("svg")
				.attr("width", width)
				.attr("height", height)

			svg.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis)
					.selectAll("text")
				        .style("text-anchor", "end")
			            .attr("dx", "-.8em")
			            .attr("dy", ".15em")
			            .attr("transform", "rotate(-65)" );

			svg.append("g")
					.attr("class", "y axis")
					.call(yAxis);

			svg.selectAll("text")
					.attr("fill","white" );

	var bars = svg.selectAll(".bar")
			.data(avgData)
				.enter();
			bars.append("rect")
					.attr("class", "bar hours")
					.attr("fill", "#146b9d")
	        .attr("x", function(d) { return xScale(d.avg) })
	        .attr("width",xScale.rangeBand())
	        .attr("y", function(d) {
	            return yScale(d.avg);
	         
	        })
	        .attr("height", function(d) {
	      
	            return height;

	        });



		// Animatie greensock
	// 	var tlBar = new TimelineMax();
	// 		tlBar.staggerFrom('#graph rect', 0.5, { scaleY:0,transformOrigin:"50% 100%"}, 0.1,"start");
	// 		tlBar.staggerFrom('#graph text', 0.5, { opacity:0 }, 0.1, "start");
	}

	barGraph();
});