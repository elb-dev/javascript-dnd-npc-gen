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

//This is like a normal dice roll, but its sides are more dynamic, and go from a range of numbers.
function diceRollRange(min, max, diceCount){
    diceList = [];
    for(var n = 0; n < diceCount; n++){
        diceList[diceList.length] = iRandomRange(min,max);
    }
    return diceList;
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
    feet = Math.floor(Math.round(inches)/12);
    inches = Math.round(inches)%12;
    output = feet + "'" + inches + '"';
    return output;
}

//This returns an integer from min to max
function iRandomRange(min,max){
    var range = max-min+1;
    var num =  Math.floor(Math.random()*range)+min;
    return num;
}

function randomRange(min,max){
    var range = max-min;
    var num = (Math.random()*range)+min
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

//Returns a value between a and b using alpha, aka a number between 0.0 and 1.0
function lerp( a, b, alpha ) {
    return (a+alpha*(b-a));
}

//Returns a value between the stated min and max
function clamp(min,max,value){
    if (value < min){ return min; }
    if (value > max){ return max; }
    return value;
}

//Returns whether or not the string is a number.
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

//Converts centimeters to inches
function centimetersToInches(centimeters) {
    return centimeters / 2.54;
}

//converts inches to centimeters
function inchesToCentimeters(inches) {
    return inches * 2.54;
}

//Gives a value based on a percentage from 0 to 1, using a bellcurve
function bellCurveLerp(t, median, stdDev) {
    // Ensure t is within the range [0, 1]
    if (t < 0 || t > 1) {
        throw new Error("The lerp value t must be between 0 and 1.");
    }

    // Calculate the z-score corresponding to the lerp value t
    function inverseCDF(t, mean, stdDev) {
        return mean + stdDev * Math.sqrt(2) * erfinv(2 * t - 1);
    }

    // Approximation of the inverse error function
    function erfinv(x) {
        const a = 0.147; // Approximation constant
        const sign = x < 0 ? -1 : 1;
        const ln = Math.log(1 - x * x);
        const part1 = 2 / (Math.PI * a) + ln / 2;
        const part2 = 1 / a * ln;

        return sign * Math.sqrt(Math.sqrt(part1 * part1 - part2) - part1);
    }

    return inverseCDF(t, median, stdDev);
}

//Given an array of choices, chooses one to return.
function choose(array) {
    var length = array.length;
    var choice = iRandomRange(0, length-1);
    return array[choice];
}

function dateToDay(myDate){
    let monthLengths = [31,28,31,30,31,30,31,31,30,31,30,31];
    let currentDate = myDate.split("-")
    currentDay = 0;

    let n = 1
    while(n < currentDate[1]){
        currentDay += monthLengths[n-1];
        n += 1;
    }
    currentDay += Number(currentDate[2]);
    return currentDay
}








//testDisplay();