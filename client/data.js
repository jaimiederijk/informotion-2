
Meteor.subscribe('chartdata', function() {
	if (Chartdata.find().count()<=0) {
		//repeat this part for more chartdata
		Chartdata.insert({
			name:"hotelData",
			hotelData : {
				"weteringenschans" : [
				    {
				      "prijs":85,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":187.03,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":450,
				      "soortprijs":"duurste"
				    }
				  ],
				"westerlijke-eilanden" : [
						    {
				      "prijs":55,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":139,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":350,
				      "soortprijs":"duurste"
				    }

				  ],
				"jordaan" : [
				    {
				      "prijs":90,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":243.10,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":830,
				      "soortprijs":"duurste"
				    }
				  ],
				"grachtengordel-west" : [
							    {
				      "prijs":50,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":170,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":500,
				      "soortprijs":"duurste"
				    }
				  ],
				"grachtengordel-zuid" : [
				    {
				      "prijs":75,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":249.86,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":392,
				      "soortprijs":"duurste"
				    }
				  ],
				  "plantage" : [
				    {
				      "prijs":24,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":160,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":1001,
				      "soortprijs":"duurste"
				    }
				  ],
				"burgwallen-nieuwe-zijde" : [
				    {
				      "prijs":59,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":209.22,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":650,
				      "soortprijs":"duurste"
				    }
				  ],
				"oosterlijke-eilanden" : [
				    {
				      "prijs":10,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":165,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":795,
				      "soortprijs":"duurste"
				    }
				  ],
				  "nieuwmarkt" : [
				   {
				      "prijs":60,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":185,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":750,
				      "soortprijs":"duurste"
				    }
				  ],
				  "burgwallen-oost-zijde" : [
				  		   {
				      "prijs":65,
				      "soortprijs":"goedkoopste"
				    },
				    {
				      "prijs":250.49,
				      "soortprijs":"gemiddelde"
				    },
				    {
				      "prijs":1250,
				      "soortprijs":"duurste"
				    }

				  ]
			}
		})
		Chartdata.insert({
			name:"schoonheidsgraden",
			schoonheidsgraden: [
				{
					citypart:"weteringenschans",
					subparts:[
						{
							part:"wde_weteringenschans_deel_1",
							grade:6.5
						},
						{
							part:"wde_weteringenschans_deel_2",
							grade:8.8
						},
						{
							part:"wde_weteringenschans_deel_3",
							grade:9.1
						},
						{
							part:"wde_weteringenschans_deel_4",
							grade:9.4
						}
					]
				},{
					citypart:"westerlijke-eilanden",
					subparts:[
						{	
							part:"westerlijke_eilanden_deel1",
							grade:9.3
						},
						{
							part:"westerlijke_eilanden_deel2",
							grade:8.5
						},
						{
							part:"westerlijke_eilanden_deel3",
							grade:7.8
						},
						{
							part:"westerlijke_eilanden_deel4",
							grade:8.3
						}
					]
				},{
					citypart:"jordaan",
					subparts:[
						{	
							part:"jordaan_deel1",
							grade:8.6
						},
						{	
							part:"jordaan_deel2",
							grade:8.3
						},
						{	
							part:"jordaan_deel3",
							grade:7.7
						},
						{	
							part:"jordaan_deel4",
							grade:8.6
						},
						{	
							part:"jordaan_deel5",
							grade:8.1
						},
						{	
							part:"jordaan_deel6",
							grade:8.5
						},
						{	
							part:"jordaan_deel7",
							grade:8.8
						}
					]
				},{
					citypart:"grachtengordel-west",
					subparts:[
						{	
							part:"grachtengordel_west_deel1",
							grade:8.8
						},
						{	
							part:"grachtengordel_west_deel2",
							grade:8.8
						},
						{	
							part:"grachtengordel_west_deel3",
							grade:8.8
						},
						{	
							part:"grachtengordel_west_deel4",
							grade:8
						},
						{	
							part:"grachtengordel_west_deel5",
							grade:8.8
						},
						{	
							part:"grachtengordel_west_deel6",
							grade:8.7
						}
					]
				},{
					citypart:"grachtengordel-zuid",
					subparts:[
						{	
							part:"grachtengordel_zuid_deel1",
							grade:8.8
						},
						{	
							part:"grachtengordel_zuid_deel2",
							grade:8.6
						},
						{	
							part:"grachtengordel_zuid_deel3",
							grade:7.3
						}
					]
				},{
					citypart:"plantage",
					subparts:[
						{	
							part:"plantage_deel1",
							grade:8.3
						},
						{	
							part:"plantage_deel2",
							grade:8.8
						},
						{	
							part:"plantage_deel3",
							grade:9.2
						},
						{	
							part:"plantage_deel4",
							grade:0
						},
						{	
							part:"plantage_deel5",
							grade:8.8
						},
						{	
							part:"plantage_deel6",
							grade:0
						},
						{	
							part:"plantage_deel7",
							grade:9.5
						}
					]
				},{
					citypart:"burgwallen-nieuwe-zijde",
					subparts:[
						{	
							part:"burgwallen_nieuwe_zijde_deel1",
							grade:6.9
						},
						{	
							part:"burgwallen_nieuwe_zijde_deel2",
							grade:6.9
						},
						{	
							part:"burgwallen_nieuwe_zijde_deel3",
							grade:8.9
						},
						{	
							part:"burgwallen_nieuwe_zijde_deel4",
							grade:8
						},
						{	
							part:"burgwallen_nieuwe_zijde_deel5",
							grade:7.6
						},
						{	
							part:"burgwallen_nieuwe_zijde_deel6",
							grade:0
						},
						{	
							part:"burgwallen_nieuwe_zijde_deel7",
							grade:0
						}
					]
				},{
					citypart:"oosterlijke-eilanden",
					subparts:[
						{	
							part:"oosterlijke-eilanden_deel1",
							grade:0
						},
						{	
							part:"oosterlijke-eilanden_deel2",
							grade:9.1
						},
						{	
							part:"oosterlijke-eilanden_deel3",
							grade:8.9
						},
						{	
							part:"oosterlijke-eilanden_deel4",
							grade:0
						},
						{	
							part:"oosterlijke-eilanden_deel5",
							grade:8.9
						},	
						{
							part:"oosterlijke-eilanden_deel6",
							grade:8.3
						},
						{	
							part:"oosterlijke-eilanden_deel7",
							grade:9.2
						}
					]
				},{
					citypart:"nieuwmarkt",
					subparts:[
						{	
							part:"nieuwmarkt_deel1",
							grade:9
						},
						{	
							part:"nieuwmarkt_deel2",
							grade:9
						},
						{	
							part:"nieuwmarkt_deel3",
							grade:8
						},
						{	
							part:"nieuwmarkt_deel4",
							grade:8.6
						},
						{	
							part:"nieuwmarkt_deel5",
							grade:0
						},
						{	
							part:"nieuwmarkt_deel6",
							grade:8.7
						},
						{	
							part:"nieuwmarkt_deel7",
							grade:8
						}
					]
				},{
					citypart:"burgwallen-oost-zijde",
					subparts:[
						{	
							part:"burgwallen_oost_zijde_deel1",
							grade:4.8
						},
						{	
							part:"burgwallen_oost_zijde_deel2",
							grade:6.9
						},
						{	
							part:"burgwallen_oost_zijde_deel3",
							grade:7.6
						}
					]
				}
			]
		})
	};
})