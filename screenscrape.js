//This is each actual div being grabbed. Each spell holds all the div info here.
var divs = document.getElementsByClassName('info');
//These are the divs that hold the links and the names
var linkDivs = []; 
//These are the divs that hold the level
var levelDivs = [];

//Here we grab the levelDivs and the linkDivs. They have the info we need, but they are not the info we need.
for (i = 0; i < divs.length; i++){
	linkDivs.push(divs[i].getElementsByClassName('link'));
	levelDivs.push(divs[i].getElementsByClassName('row spell-level'));
}

//These are the levels grabbed from the levelDivs
levels = [];
for(i = 0; i < levelDivs.length; i++){
	levels.push(levelDivs[i].getElementsByTagName("SPAN"));
}
console.log(levels);