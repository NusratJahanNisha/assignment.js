// feetTomile

function feetToMile(feet){
    if(feet >= 0){
        var mile = feet / 5280;
        return mile;
    }
    else{
        return 'Distance can not be negative.Please put a positive number.';
    }
}
var result = feetToMile(2020);
console.log(result);

// woodCalculator

function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        return 'Object can not be negative.Please put a positive number.';
    }
    else{var woodOfChair = chair * 1;
         var woodOfTable = table * 3;
         var woodOfBed = bed * 5;
         var totalWood = woodOfChair + woodOfTable + woodOfBed;
         return totalWood;
    }
}
var woodResult = woodCalculator(8, 9, 10);
console.log(woodResult);

// brickCalculator

function brickCalculator(floor){
    var brick = 0;
    if (floor <= 0){
        return 'Floor can not be zero or negative value.Please put a positive number.';
    }
    else if (floor >= 1 && floor <= 10){
        bricks = floor * 15 * 1000;
        return bricks;
    }
    else if (floor >= 11 && floor <= 20){
        floor = floor - 10;
        bricks = (floor * 12 * 1000) + 150000;
        return bricks;
    }
    else{
        floor = floor - 20;
        bricks = (floor * 10 * 1000) + 150000 + 120000;
        return bricks;
    }
}
var totalBrick = brickCalculator(29);
console.log(totalBrick);


// tinyFriend

function tinyFriend(names){
    var smallestName = names[0];
    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
            if(currentName.length < smallestName.length){
                smallestName = currentName; 
            }
    }
    return smallestName; 
}
var smallestName = tinyFriend(['nishan ali', 'ali khan', 'hasan sheik', 'linkin', 'karl']);
console.log(smallestName); 





