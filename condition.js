// {
//     if (condition) {
//         ---------- if true
//     }
//     else {
//         ------ if false
//     }
// }

// var isRaining = true;
// var isRaining = false;

// if (isRaining === true) {
//   console.log("Will not go outside.");
// } else {
//   console.log("will go outside.");
// }

// if (!isRaining) {
//   console.log("Will not go outside.");
// } else {
//   console.log("will go outside.");
// }

// Ternary Operator
// condition ? if true : if false

// isRaining = true
//   ? console.log("will not go outside")
//     : console.log("Will go outside");

// isRaining = false
//   ? console.log("will not go outside")
//   : console.log("Will go outside");

// var money = 20;
// var isRaining = true;
// var taxi = 25;
// var money = 20;
// var isRaining = true;
// var taxi = 15;
// var money = 20;
// var isRaining = false;
// var taxi = 25;
// var money = 10;
// var isRaining = true;
// var taxi = 25;

// if (isRaining === true && money >= taxi) {
//   console.log("will go to market");
// } else {
//   console.log("will not go to market");
// }

// var money = 10;
// var isRaining = false;
// var taxi = 25;

// if (isRaining === true || money >= taxi) {
//   console.log("will go to market");
// } else {
//   console.log("will not go to market");
// }

// Ladder Condition Multiple if else
// var money = 40;
// var money = 80;
// var money = 880;

// if (money >= 440) {
//   console.log("Biriyani khabo");
// } else {
//   console.log("Na kheye thakboo");
// }

// if (money >= 440) {
//   console.log("Biriyani khabo");
// } else if (money >= 50) {
//   console.log("Noodle Khabo");
// } else if (money >= 30) {
//   console.log("Jhalmuri khaboo");
// } else {
//   console.log("Na kheye auto kore bari jabo.......");
// }

// Nested Condition

// var isRaining = true;
// var haveUmbrella = true;
// var isRaining = false;
var isRaining = true;
// var haveUmbrella = false;
var haveUmbrella = true;
// var amIReady = true;
// var amIReady = false;

if (isRaining === true) {
  if (haveUmbrella === true) {
    console.log("will go outside because I have umbrella");
    if (amIReady === true) {
      console.log("lets go....");
    } else {
      console.log("preparing to go......");
    }
  } else {
    console.log("will not go because I don't have Umbrella");
  }
} else {
  console.log("Will go outside because its sunny day.....");
}
