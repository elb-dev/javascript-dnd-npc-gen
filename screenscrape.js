//Levels
var collectionDivLevel = document.getElementsByClassName('row spell-level');
var levels = [];

//Name
var collectionDivName = document.getElementsByClassName('row spell-name');
var names = [];

//Links
//We just use collectionDivName
var links = [];

//Code
var code = [];
for(i = 0; i < collectionDivLevel.length; i++){
	levels.push(collectionDivLevel.item(i).getElementsByTagName("SPAN").item(0).innerHTML.slice(0,1));
	if(levels[i] == "C"){
		levels[i] = "0";
	}
	names.push(collectionDivName.item(i).getElementsByTagName("A").item(0).innerHTML);
	links.push(collectionDivName.item(i).getElementsByTagName("A").item(0).href);
	code.push("spells["+levels[i]+"].push(['"+links[i]+"','"+names[i]+"',2]);");
}
console.log(code);



//Div
var divElements = document.getElementById('ctl00_RadDrawer1_Content_MainContent_DetailedOutput');
var divChildren = divElements.children

var links = [];
var names = [];
var levels = [];
var rarity = [];
var currentLevel = -1;
var spellCounter = -1;
var htmlStart = 'https://2e.aonprd.com/'

//Items
var item
for(i = 0; i < divChildren.length; i++){
	item = divChildren.item(i)
	if (item.nodeName == 'H2'){
		currentLevel += 1;
	} else if (item.nodeName == 'A'){
		var itemHref = item.getAttribute('href');
		if (itemHref != 'PFS.aspx'){
			spellCounter += 1;
			levels[spellCounter] = currentLevel;
			rarity[spellCounter] = 0;
			links[spellCounter] = htmlStart.concat(itemHref);
			names[spellCounter] = item.getElementsByTagName('b')[0].getElementsByTagName('u')[0].innerHTML;
		}
	} else if (item.nodeName == 'SUP'){
		if (item.innerHTML == 'U'){
			rarity[spellCounter] = 1;
		} else if (item.innerHTML == 'R'){
			rarity[spellCounter] = 2;
		} else if (item.innerHTML == 'Q'){
			rarity[spellCounter] = 3;
		}
	}
}

//Code
code = [];
for(i = 0; i < links.length; i++){
	code[i] = "spells["+levels[i]+"].push(['"+links[i]+"','"+names[i]+"',"+rarity[i]+"]);";
}
codeBlock = '';
for(i = 0; i < code.length; i++){
	codeBlock = codeBlock.concat(code[i]+'\r\n');
}
console.log(codeBlock);