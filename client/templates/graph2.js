Template.graph2.rendered = function() {
  this.autorun(function() {
    Meteor.subscribe('chartdata', function() {
	

	    var graphData = Chartdata.findOne({name:"hotelData"}).hotelData
		function barGraph () {
			
				
			var width = 1000,
			// graphData = Chartdata.findOne({name:"schoonheidsgraden"}).schoonheidsgraden,
				height = 600,
				cityParts=["weteringenschans","westerlijke-eilanden","jordaan",
						"grachtengordel-west","grachtengordel-zuid","plantage",
						"burgwallen-nieuwe-zijde","oosterlijke-eilanden","nieuwmarkt",
						"burgwallen-oost-zijde"];

			var avgData =[];

			for (var i = 0; i < cityParts.length; i++) {
				
				var part = cityParts[i];

				avgData.push({"avg":graphData[part][1].prijs,"name":part});
			};

		    //kaart kleuren["#CCD2DE","#99A4BD","#66779C","#33497B","#001C5B"]
		    chartColors=mapColors.red;//["#5B0000","#7C3333","#9D6666","#BE9999","#DECCCC"]
		    for (var r = avgData.length - 1; r >= 0; r--) {
		    	var color;
		    	var name=avgData[r].name;

		    	if (avgData[r].avg>225) {
		    		color=chartColors[0]
		    	} else if(avgData[r].avg>200) {
		    		color=chartColors[1]
		    	} else if(avgData[r].avg>175) {
		    		color=chartColors[2]
		    	} else if(avgData[r].avg>150) {
		    		color=chartColors[3]
		    	} else {
		    		color=chartColors[4]
		    	}

		    	mapColors.chartRed[name]=color;
		    	$(".right-map ."+avgData[r].name+" circle").css("fill",color)
		    };

			avgData.sort(function(a,b){
				return d3.descending(a.avg, b.avg);
			});


			// D3 datavisualisatie
			var width = 250;
			var height = 500;

			// maak een schaal voor de breedte
			var widthScale = d3.scale.linear()
				.domain([0, d3.max(avgData, function(d){return d.avg})]) // nul is laagst en kd kan niet hoger dan 10
				.range([0, width]); // vertaal dit in de range van je breedte

			var heightScale = d3.scale.linear()
				.domain([0, 10])
				.range([0, height]);

			// maak een as met de schaal voor de breedte
			var axis = d3.svg.axis()
				.ticks(5) 
				.scale(widthScale); // gebruik de schaal breedte voor de as

			// selecteer lege svg en maak vaste hoogtes en breetes
			var canvas = d3.select('#graph2').append('svg')
				.attr('width', width) // 1000
				.attr('height', height) // 1000
				.append('g') // groep
				.attr('transform', 'translate( 200, 12 )'); // margins

			// bereken hoe lang de rechthoeken moeten worden op basis van data
			var bars = canvas.selectAll('rect')
				.data(avgData) // kap data
				.enter() // ga data in 
				.append('rect') // maak rechthoeken
					.attr('class',function(d) {return "graph_"+d.name})
					.attr('width', function(d) { return widthScale(d.avg); }) // breedte balk = functie schaal van breedte 
					.attr('height', 16) // hoogste balk vaste waarde
					.attr('fill', '#656666')
					.attr('y' , function(d, i) { return i * 21 }) // verdeel balken verticaal
					.attr('id', function (d, i) { return "bar" + (i + 1); }); // maak een id voor elke rechthoek en tel ze op 'bar1, bar2 enzo'

			// pak de naam uit data en append die in tekst
			var date = canvas.selectAll('text')
				.data(avgData)
				.enter()
					.append('text')
					.text(function(d) { return d.name }) // tekst = functie return datum
					.attr('y', function(d, i){ return i * 21 } ) // index van date 21 keer verticaal verdelen.
					.attr('transform', 'translate(-12, 12)')
					.style("text-anchor","end") 
	            	.attr("startOffset","100%"); // margins bij de datums zodat ze netjes in midden van balk staan.

			// maak nieuwe groep aan voor de as
			canvas.append('g')
				.attr('transform', 'translate(0, 220)')
				.call(axis) // roep de as op
				.attr('id', function (d, i) { return 'balk' }); // maak id aan voor as
		}
		barGraph();
 	})	
	
  });
};
Template.graph2.helpers({
	chart:function(){
	}
});