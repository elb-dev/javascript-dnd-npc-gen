function createPotions(){
	var potions = [];

	//A potion is part of a two index array
	//First it's the link to the potion page on DnD Beyond
	//Second is the name of the potion,
	//Third is the level
	//Fourth is the price in gp
	//Fifth is the rarity going common, uncommon, rare


	//potions[].push(['','', , , ]);

	//Potions
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=714','Gecko Potion',1,3,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=720','Potion of Expeditious Retreat',1,3,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=723','Ration Tonic',1,3,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=186','Healing Potion (Minor)',1,4,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=721','Potion of Retaliation (Minor)',1,4,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=722','Potion of Shared Memories',1,4,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=902','Antivenom Potion',2,6,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=196','Potion of Water Breathing',3,11,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1823','Draft of Stellar Radiance',3,12,2]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=186','Healing Potion (Lesser)',3,12,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=721','Potion of Retaliation (Lesser)',3,12,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=184','Barkskin Potion',4,15,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=197','Shrinking Potion',4,15,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1822','Bottled Omen',4,20,2]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=187','Invisibility Potion',4,20,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=987','Fu Water',5,21,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=190','Potion of Leaping',5,21,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=911','Green Wyrmling Breath Potion',5,30,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=719','Potion of Disguise (Lesser)',5,30,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1635','Wine of the Blood',5,30,2]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=192','Potion of Resistance (Lesser)',6,45,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=200','Truth Potion',6,46,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=186','Healing Potion (Moderate)',6,50,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=721','Potion of Retaliation (Moderate)',6,50,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=193','Potion of Swimming',6,50,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=723','Ration Tonic (Greater)',7,55,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=198','Serum of Sex Shift',7,60,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=185','Dragon\'s Breath Potion (Young)',7,70,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=191','Potion of Quickness',8,90,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1030','Shrinking Potion (Greater)',8,90,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1030','Potion of Shared Life',8,95,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=719','Potion of Disguise (Moderate)',8,100,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=189','Potion of Flying',8,100,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1028','Potion of Minute Echoes',9,125,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1608','Effervescent Decoction',10,160,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1610','Mutagenic Renovator',10,180,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=192','Potion of Resistance (Moderate)',10,180,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1029','Potion of Stable Form',10,180,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1027','Potion of Grounding',10,185,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1711','Potion of Annulment (Lesser)',10,200,2]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=193','Potion of Swimming (Greater)',11,250,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=719','Potion of Disguise (Greater)',11,300,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1272','Dragonfly Potion',12,310,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=194','Potion of Tongues',12,320,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1026','Phoenix Flask',12,350,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=185','Dragon\'s Breath Potion (Adult)',12,400,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=186','Healing Potion (Greater)',12,400,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=721','Potion of Retaliation (Greater)',12,400,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=188','Panacea',13,450,1]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=726','Time Shield Potion',13,600,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=192','Potion of Resistance (Greater)',14,850,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=189','Potion of Flying (Greater)',15,1000,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1711','Potion of Annulment (Moderate)',15,1300,2]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=199','Truesight Potion',16,1500,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1029','Potion of Stable Form (Greater)',16,1800,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=185','Dragon\'s Breath Potion (Wyrm)',17,3000,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=195','Potion of Undetectability',18,4400,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=186','Healing Potion (Major)',18,5000,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=721','Potion of Retaliation (Major)',18,5000,0]);
	potions.push(['https://2e.aonprd.com/Equipment.aspx?ID=1711','Potion of Annulment (Greater)',20,13000,2]);


	return potions;
}