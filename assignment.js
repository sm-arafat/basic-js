// assignment_1 : feetToMile

function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile; 
}

var result = feetToMile(1000);
console.log(result);




//  assignment_2 : woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 2;
    var tableCount = table * 4;
    var bedCount = bed * 5;
    var total = chairCount+tableCount+bedCount;
    return total;
}

var totalWood = woodCalculator(10, 10, 10);
console.log(totalWood)




//  assignment_3 : brickCalculator

function brickCalculator(floors) {
  var bricks = 0;
  if (floors <= 10) {
    bricks = floors * 15 * 1000;
  } else if (floors <= 20) {
    var upto10Floors = 10 * 15 * 1000;
    var remainingfloors = floors - 10;
    var upto20Floors = remainingfloors * 12 * 1000;
    bricks = upto10Floors + upto20Floors;
  } else {
    var upto10Floors = 10 * 15 * 1000;
    var upto20Floors = 10 * 12 * 1000;
    var remainingfloors = floors - 20;
    var uptoNnumberFloors = remainingfloors * 10 * 1000;
    bricks = upto10Floors + upto20Floors + uptoNnumberFloors;
  }
  return bricks;
}

var requiredBricks = brickCalculator(43);
console.log(requiredBricks);




// assignment_4 : tinyfriend

function tinyfriend(name) {
    shortestname = name[0];
    for (var i = 0; i < name.length; i++) {
      var tinyName = name[i];
      if (tinyName.length < shortestname.length){
        shortestname = tinyName;
      }
    }
    return shortestname;
  }
  
  var name = ["adam", "ebrahim", "ali", "hakik"];
  var x = tinyfriend(name);
  console.log(x);
 