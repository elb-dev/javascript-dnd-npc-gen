function createPotions(){
	var potions = [];

	//A potion is part of a two index array
	//First it's the link to the potion page on DnD Beyond
	//Second it's the name of the potion,
	//Third is the price of the potion in gold
	//Fourth it's the rarity, common is 0, uncommon is 1, rare is 2, very rare is 3, and legendary is 4.


	//potions[].push(['','', , ]);

	//Basic Rules
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Healing',50,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Greater Healing',150,1]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Superior Healing',450,2]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Supreme Healing',1350,3]);

	return potions;
}