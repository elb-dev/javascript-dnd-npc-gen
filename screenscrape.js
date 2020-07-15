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