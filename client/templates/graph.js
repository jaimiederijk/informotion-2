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

	    // D3 datavisualisatie
		var width = 500;
		var height = 500;

		// maak een schaal voor de breedte
		var widthScale = d3.scale.linear()
		  .domain([0, 10]) // nul is laagst en kd kan niet hoger dan 10
		  .range([0, width]); // vertaal dit in de range van je breedte

		var heightScale = d3.scale.linear()
		  .domain([0, 5])
		  .range([0, height]);

		// maak een schaal voor de kleur
		var color = d3.scale.linear()
		  .domain([0, 5]) // niet hoger dan 5
		  .range(['tomato', 'lime']); // rood = slecht, groen = goed

		// maak een as met de schaal voor de breedte
		var axis = d3.svg.axis()
		  .ticks(10) 
		  .scale(widthScale); // gebruik de schaal breedte voor de as

		// selecteer lege svg en maak vaste hoogtes en breetes
		var canvas = d3.select('#graph').append('svg')
		  .attr('width', width) // 1000
		  .attr('height', height) // 1000
		  .append('g') // groep
		  .attr('transform', 'translate( 12, 12 )'); // margins

		// bereken hoe lang de rechthoeken moeten worden op basis van data
		var bars = canvas.selectAll('rect')
		  .data(avgData) // kap data
		  .enter() // ga data in 
		    .append('rect') // maak rechthoeken
		    .attr('width', function(d) { return widthScale(d.avg); }) // breedte balk = functie schaal van breedte 
		    .attr('height', 20) // hoogste balk vaste waarde
		    .attr('y' , function(d, i) { return i * 21 }) // verdeel balken verticaal
		    .attr('fill', function(d) { return color(d.avg) }) // kleur ze op basis van de color functie schaal rood slecht groen goed
		    .attr('id', function (d, i) { return "bar" + (i + 1); }); // maak een id voor elke rechthoek en tel ze op 'bar1, bar2 enzo'

		// pak de datum uit data en append die in tekst
		var date = canvas.selectAll('text')
		  .data(avgData)
		  .enter()
		    .append('text')
		    .text(function(d) { return d.name }) // tekst = functie return datum
		    .attr('y', function(d, i){ return i * 21 } ) // index van date 21 keer verticaal verdelen.
		    .attr('transform', 'translate(6, 14.5)'); // margins bij de datums zodat ze netjes in midden van balk staan.

		// maak nieuwe groep aan voor de as
		canvas.append('g')
		  .attr('transform', 'translate(0, 220)')
		  .call(axis) // roep de as op
		  .attr('id', function (d, i) { return 'kdbalk' }); // maak id aan voor as

		// maak een schaal voor de breedte
	// 	var xScale = d3.scale.ordinal()
	// 		.domain(avgData.map(function(d) { return d.avg; }))
	// 		.rangeRoundBands([0, width], .2);

	// 	// maak een schaal voor de kleur
	// 	var yScale = d3.scale.linear()
	// 		.domain([0, d3.max(avgData, function(d){
	//         return d.avg;
	      
	//     })])
	// 		.range([ height,0]);

	// 	var xAxis = d3.svg.axis()
	// 			.scale(xScale)
	// 			.orient("bottom")

	// 	var yAxis = d3.svg.axis()
	// 			.scale(yScale)
	// 			.orient("left")
	// 			.tickFormat(function(d) { return d ; });

	// 	// selecteer lege svg en maak vaste hoogtes en breetes
	// 	var svg = d3.select("#graph").append("svg")
	// 			.attr("width", width)
	// 			.attr("height", height)

	// 		svg.append("g")
	// 				.attr("class", "x axis")
	// 				.attr("transform", "translate(0," + height + ")")
	// 				.call(xAxis)
	// 				.selectAll("text")
	// 			        .style("text-anchor", "end")
	// 		            .attr("dx", "-.8em")
	// 		            .attr("dy", ".15em")
	// 		            .attr("transform", "rotate(-65)" );

	// 		svg.append("g")
	// 				.attr("class", "y axis")
	// 				.call(yAxis);

	// 		svg.selectAll("text")
	// 				.attr("fill","white" );

	// var bars = svg.selectAll(".bar")
	// 		.data(avgData)
	// 			.enter();
	// 		bars.append("rect")
	// 				.attr("class", "bar hours")
	// 				.attr("fill", "#146b9d")
	//         .attr("x", function(d) { return xScale(d.avg) })
	//         .attr("width",xScale.rangeBand())
	//         .attr("y", function(d) {
	//             return yScale(d.avg);
	         
	//         })
	//         .attr("height", function(d) {
	//             return height;
	//         });



		// Animatie greensock
	// 	var tlBar = new TimelineMax();
	// 		tlBar.staggerFrom('#graph rect', 0.5, { scaleY:0,transformOrigin:"50% 100%"}, 0.1,"start");
	// 		tlBar.staggerFrom('#graph text', 0.5, { opacity:0 }, 0.1, "start");
	}

	barGraph();
});