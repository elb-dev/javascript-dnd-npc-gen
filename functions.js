function testDisplay(){
	console.log("We're going to be displaying test outputs of various functions.");
	var myDiceList = diceRoll(4, 6);
	console.log("diceRoll(4,6); = " + myDiceList);
	console.log("statModCalc(6); = " + statModCalc(6));
	console.log("statModCalc(8); = " + statModCalc(8));
	console.log("statModCalc(10); = " + statModCalc(10));
	console.log("statModCalc(12); = " + statModCalc(12));
	console.log("statModCalc(13); = " + statModCalc(13));
	console.log("statModCalc(14); = " + statModCalc(14));
	console.log("heightFormat(69); = " + heightFormat(69));
	console.log("The functions are now finished.");
}

//This function will roll a number of dice, and can drop a number of dice, highest or lowest.
function diceRoll(diceCount, sides){
    diceList = diceLister(diceCount, sides);
    diceAdded = diceAdder(diceList);
    return diceAdded;
}

function diceRollDrop(diceCount, sides, highOrLow, dropCount){
    //false for dropping high, true for dropping low
    diceList = diceLister(diceCount, sides);
    diceRemover(diceList, highOrLow, dropCount);
    diceAdded = diceAdder(diceList);
    return diceAdded;
}

function diceLister(diceCount, sides){
    diceList = [];
    for(var n = 0; n < diceCount; n++){
    	diceList[diceList.length] = Math.floor(Math.random()*sides)+1;
    }
    return diceList;
}

function diceRemover(diceList, highOrLow, dropCount){
    //false for dropping high, true for dropping low
    diceList.sort(function(a, b){return a-b});
    if(highOrLow){
    	diceList.reverse();
    }
    for(var n = 0; n < dropCount; n++){
    	diceList.pop();
    }
}

function diceAdder(diceList){
	value = 0;
	for(var n = 0; n < diceList.length; n++){
		value += diceList[n];
	}
	return value;
}

function statModCalc(stat){
    return Math.floor((stat/2)-5);
}

function heightFormat(inches){
    feet = Math.floor(inches/12);
    inches = inches%12;
    output = feet + "'" + inches + '"';
    return output;
}

testDisplay();

