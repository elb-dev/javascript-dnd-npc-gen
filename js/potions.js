function createPotions(){
	var potions = [];

	//A potion is part of a two index array
	//First it's the link to the potion page on DnD Beyond
	//Second it's the name of the potion,
	//Third is the price of the potion in gold
	//Fourth it's the rarity, common is 0, uncommon is 1, rare is 2, very rare is 3, and legendary is 4.
	//Fifth is if it's a potion or poison. 0 for potion, 1 for poison, 2 for other


	//potions[].push(['','', , ]);

	//Potions
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Healing',50,0,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Greater Healing',150,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Superior Healing',450,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-healing','Potion of Supreme Healing',1350,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/elixir-of-health','Elixer of Health',120,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/oil-of-etherealness','Oil of Etherealness',1920,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/oil-of-sharpness','Oil of Sharpness',3200,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/oil-of-slipperiness','Oil of Slipperiness',480,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/philter-of-love','Philter of Love',90,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-animal-friendship','Potion of Animal Friendship',200,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-clairvoyance','Potion of Clairvoyance',960,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-climbing','Potion of Climbing',180,0,0]);
	//potions.push(['https://www.dndbeyond.com/magic-items/potion-of-comprehension','Potion of Comprehension',,0,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-diminution','Potion of Diminution',270,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-fire-breath','Potion of Fire Breath',150,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-flying','Potion of Flying',500,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-gaseous-form','Potion of Gaseous Form',300,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-hill-giant-strength','Potion of Hill Giant Strength',1000,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-frost-giant-strength','Potion of Frost Giant Strength',3000,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-stone-giant-strength','Potion of Stone Giant Strength',3000,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-fire-giant-strength','Potion of Fire Giant Strength',5000,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-cloud-giant-strength','Potion of Cloud Giant Strength',7000,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-storm-giant-strength','Potion of Storm Giant Strength',9000,4,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-growth','Potion of Growth',270,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-heroism','Potion of Heroism',180,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-invisibility','Potion of Invisibility',180,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-invulnerability','Potion of Invulnerability',3840,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-longevity','Potion of Longevity',9000,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-mind-reading','Potion of Mind Reading',180,2,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-poison','Potion of Poison',100,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Acid Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Cold Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Fire Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Force Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Lightning Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Necrotic Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Poison Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Psychic Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Radiant Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-resistance','Potion of Thunder Resistance',300,1,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-speed','Potion of Speed',400,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-vitality','Potion of Vitality',960,3,0]);
	potions.push(['https://www.dndbeyond.com/magic-items/potion-of-water-breathing','Potion of Water Breathing',180,1,0]);

	return potions;
}