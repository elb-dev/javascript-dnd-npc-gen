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
    console.log("iRandomRange(65,90); = " + iRandomRange(65,90));
    var myDiceList2 = diceLister(4,6);
    console.log("Dice list: " + myDiceList2);
    diceRemover(myDiceList2,true,1);
    console.log("Dice list: " + myDiceList2);
    console.log("Removing dice from list");
    console.log("Rolling 4 dice = " + myDiceList2);
	console.log("The functions are now finished.");
}

//This function will roll a number of dice, and can drop a number of dice, highest or lowest.
function diceRoll(diceCount, sides){
    diceList = diceLister(diceCount, sides);
    diceAdded = diceAdder(diceList);
    return diceAdded;
}

function diceRollDrop(diceCount, sides, highOrLow, dropCount){
    //true for dropping high, false for dropping low
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
    //true for dropping high, false for dropping low
    diceList.sort(function(a, b){return a-b});
    if(!highOrLow){
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

//This returns an integer from min to max
function iRandomRange(min,max){
    var range = max-min+1;
    var num =  Math.floor(Math.random()*range)+min;
    return num;
}

//This returns an integer from min to max, on a bell curve.
function iRandomRangeBell(min,max,v){
    //v is the number of time random is summed and should be >= 1
    var num = 0;
    for(var i = v; i > 0; i--){
        num += Math.random();
    }
    num = num/v;
    var range = max-min+1;
    num = Math.floor(num*range)+min;
    return num;
}












//testDisplay();