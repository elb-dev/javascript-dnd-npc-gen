function createSpells(){
	var spells = [[],[],[],[],[],[],[],[],[],[]];

	//An individual spell is a three index array.
	//[0] = link to spell on DnD Beyond
	//[1] = spell name
	//[2] = Source
	//Sources:
	//0 = Basic Rules
	//1 = Player's Hand Book
	//2 = Elemental Evil Player's Companion
	//3 = Guildmaster's Guide to Ravnica
	//4 = Sword Coast Adventurer's Guide
	//5 = Xanathar's Guide to Everything
	//6 = Unearthed Arcana

	//spells[].push(["","",]);

	spells[8].push(["https://www.dndbeyond.com/spells/abi-dalzims-horrid-wilting","Abi-Dalzim’s Horrid Wilting",2]);
	spells[1].push(["https://www.dndbeyond.com/spells/absorb-elements","Absorb Elements",2]);
	spells[2].push(["https://www.dndbeyond.com/spells/acid-arrow","Acid Arrow",0]);
	spells[0].push(["https://www.dndbeyond.com/spells/acid-splash","Acid Splash",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/acid-stream-ua","Acid Stream",6]);
	spells[2].push(["https://www.dndbeyond.com/spells/aganazzars-scorcher","Aganazzar's Scorcher",2]);
	spells[2].push(["https://www.dndbeyond.com/spells/aid","Aid",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/alarm","Alarm",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/alter-self","Alter Self",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/animal-friendship","Animal Friendship",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/animal-messenger","Animal Messenger",0]);
	spells[8].push(["https://www.dndbeyond.com/spells/animal-shapes","Animal Shapes",0]);
	spells[3].push(["https://www.dndbeyond.com/spells/animate-dead","Animate Dead",0]);
	spells[5].push(["https://www.dndbeyond.com/spells/animate-objects","Animate Objects",0]);
	spells[5].push(["https://www.dndbeyond.com/spells/antilife-shell","Antilife Shell",0]);
	spells[8].push(["https://www.dndbeyond.com/spells/antimagic-field","Antimagic Field",0]);
	spells[8].push(["https://www.dndbeyond.com/spells/antipathy-sympathy","Antipathy/Sympathy",0]);
	spells[4].push(["https://www.dndbeyond.com/spells/arcane-eye","Arcane Eye",0]);
	spells[6].push(["https://www.dndbeyond.com/spells/arcane-gate","Arcane Gate",0]);
	spells[5].push(["https://www.dndbeyond.com/spells/arcane-hand","Arcane Hand",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/arcane-lock","Arcane Lock",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/arcanists-magic-aura","Arcanist's Magic Aura",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/armor-of-agathys","Armor of Agathys",1]);
	spells[1].push(["https://www.dndbeyond.com/spells/arms-of-hadar","Arms of Hadar",0]);
	spells[9].push(["https://www.dndbeyond.com/spells/astral-projection","Astral Projection",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/augury","Augury",0]);
	spells[4].push(["https://www.dndbeyond.com/spells/aura-of-life","Aura of Life",1]);
	spells[4].push(["https://www.dndbeyond.com/spells/aura-of-purity","Aura of Purity",1]);
	spells[3].push(["https://www.dndbeyond.com/spells/aura-of-vitality","Aura of Vitality",1]);
	spells[5].push(["https://www.dndbeyond.com/spells/awaken","Awaken",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/bane","Bane",0]);
	spells[5].push(["https://www.dndbeyond.com/spells/banishing-smite","Banishing Smite",0]);
	spells[4].push(["https://www.dndbeyond.com/spells/banishment","Banishment",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/barkskin","Barkskin",0]);
	spells[3].push(["https://www.dndbeyond.com/spells/beacon-of-hope","Beacon of Hope",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/beast-bond","Beast Bond",2]);
	spells[2].push(["https://www.dndbeyond.com/spells/beast-sense","Beast Sense",1]);
	spells[3].push(["https://www.dndbeyond.com/spells/bestow-curse","Bestow Curse",0]);
	spells[5].push(["https://www.dndbeyond.com/spells/bigbys-hand","Bigby's Hand",0]);
	spells[4].push(["https://www.dndbeyond.com/spells/black-tentacles","Black Tentacles",0]);
	spells[6].push(["https://www.dndbeyond.com/spells/blade-barrier","Blade Barrier",0]);
	spells[0].push(["https://www.dndbeyond.com/spells/blade-ward","Blade Ward",1]);
	spells[1].push(["https://www.dndbeyond.com/spells/bless","Bless",0]);
	spells[4].push(["https://www.dndbeyond.com/spells/blight","Blight",0]);
	spells[3].push(["https://www.dndbeyond.com/spells/blinding-smite","Blinding Smite",1]);
	spells[2].push(["https://www.dndbeyond.com/spells/blindness-deafness","Blindness/Deafness",0]);
	spells[3].push(["https://www.dndbeyond.com/spells/blink","Blink",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/blur","Blur",0]);
	spells[6].push(["https://www.dndbeyond.com/spells/bones-of-the-earth","Bones of the Earth",2]);
	spells[0].push(["https://www.dndbeyond.com/spells/booming-blade","Booming Blade",4]);
	spells[2].push(["https://www.dndbeyond.com/spells/branding-smite","Branding Smite",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/burning-hands","Burning Hands",0]);
	spells[3].push(["https://www.dndbeyond.com/spells/call-lightning","Call Lightning",0]);
	spells[2].push(["https://www.dndbeyond.com/spells/calm-emotions","Calm Emotions",0]);
	spells[1].push(["https://www.dndbeyond.com/spells/catapult","",]);
	spells[].push(["","",]);
	spells[].push(["","",]);
	spells[].push(["","",]);
	spells[].push(["","",]);
	spells[].push(["","",]);
	spells[].push(["","",]);


	return spells;
}