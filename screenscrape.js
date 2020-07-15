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
	code.push("spells["+levels[i]+"].push(['"+links[i]+"','"+names[i]+"',0]);");
}
console.log(code);


//These are the divs that hold the level
var levelDivs = [];

//Here we grab the levelDivs and the linkDivs. They have the info we need, but they are not the info we need.
for (i = 0; i < divs.length; i++){
	levelDivs.push(collectionDivs[i].getElementsByClassName('row spell-level'));
}
console.log(levelDivs);
var singleLevelDiv = levelDivs[0].item(0);
console.log(singleLevelDiv);
console.log(singleLevelDiv.getElementsByTagName("SPAN"));

//These are the levels grabbed from the levelDivs
levels = [];
for(i = 0; i < levelDivs.length; i++){
	levels.push(levelDivs[i].getElementsByTagName("SPAN"));
}
console.log(levels);