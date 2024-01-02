// Variables
/*let score = 9;
let game = 18; 
score += 1;
let gameScore = (' The score is ' + score);
let theGameIs = (' You lose ');
let result = gameScore.concat(theGameIs);
console.log(result);
console.log(` The score is ${score}`); */
// STRINGS
/*let sabrina = "sabrina";
let letter = sabrina.charAt(4);
console.log(letter);
let teddy = "Teddy"
let theCharCode = teddy.charCodeAt(2);
let thirdChar = String.fromCharCode(theCharCode);
console.log(theCharCode);
console.log(thirdChar);
let firstName = "Jon";
let lastName = "Lauture"; 
let result = firstName.concat(" ", lastName);
console.log(result);
let theTruth = "Mj > Lebron";
let startsWithThe = theTruth.startsWith('Mj');
let theFalse = "Lebron > Mj"
let endsWithThe = theFalse.endsWith("Lebron");
console.log(startsWithThe);
console.log(endsWithThe);
const ozgur = 'Once upon a time Ozgur looked up at the Moon, ';
const includesOzgur = ozgur.includes('Ozgur');
console.log(includesOzgur);
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone.";
const indexOfCow = joshHadALittleLambOopsCow.indexOf("cow");
console.log(indexOfCow); 
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace.";
const lastIndexOfVanessa = vanessa.lastIndexOf('Vanessa');
console.log(lastIndexOfVanessa);
const noWeCantTeo = "but did you try it out though?";
const stringLength = noWeCantTeo.length;
console.log(stringLength);
let = replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!";
let = changedString = replaceGokuWithVegeta.replace("Goku", "Vegeta");
console.log(changedString);
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
const rightWifey = joshIsLookingForWifey.search("WIFEY 1")
console.log(rightWifey);
const pizzaSentence = "pizza, other half of pizza"
const otherHalf = pizzaSentence.slice(7 , 26);
const onlyPizza = pizzaSentence.slice(0 , 5);
console.log(otherHalf);
console.log(onlyPizza);
let splitTheBill = "Yaz, Poornima, and Leshawn";
let namesArray = splitTheBill.split(', ');
console.log(namesArray);
let splitTheBilll = "Yaz, Poornima, and Leshawn";
const charactersArray = splitTheBill.split('');
console.log(charactersArray);
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
console.log(angry);
const lowerCaseAngry = angry.toLowerCase();
console.log(lowerCaseAngry);
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
const capitalizedJahlun = jahlunSaidToPutSomeRespectToHisName.toUpperCase()
console.log(capitalizedJahlun);
const basicGreeting = "Hello World"
const newBasicGreeting = basicGreeting.substring(1 , 4,  5 , 6 , 7 , 8 , 9 ,10 , 11 );
console.log(newBasicGreeting);
const ohReally = "JavaScript Substring"; 
const newOhReally = ohReally.substring(0, 11);
console.log(newOhReally);
const aslDays = "xXteoWuzHereXx@aol.com"
const newAslDays = aslDays.substring(15 , 22);
console.log(newAslDays);*/
// BOOLEAN 
/*
const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

 console.log(a < b)
 console.log(c > b)
 console.log(d === d)
 console.log(d !== a)
 console.log(a !== 15)
 console.log(a < b && b < c)
 console.log(c > b || a > d)
// Loops
let ken = {
    name: "Ken",
    roomSpinning: false,
  };
  
  function spinRoom() {
    ken.roomSpinning = true;
    for (let i = 1; i <= 10; i++) {
      console.log(`${ken.name}'s room is spinning ${i} times...`);
    }
    ken.roomSpinning = false;
  }
  
  console.log(`${ken.name} has a headache today and says the room has been spinning like crazy.`);
  spinRoom();
  console.log(`${ken.name}'s room has finally stopped spinning. Phew!\n`);
  
  let teo = {
    name: "Teo",
    visionSpinning: false,
  };
  
  function spinVision() {
    teo.visionSpinning = true;
    for (let i = 1; i <= 20; i++) {
      console.log(`${teo.name}'s vision is spinning ${i} times...`);
    }
    teo.visionSpinning = false;
  }
  
  console.log(`${teo.name} said that was so mean of Teo to do Ken dirty like that.`);
  spinVision();
  console.log(`${teo.name}'s vision has finally stopped spinning. My bad!\n`);
  
  let lisa = {
    name: "Lisa",
  };
  
  let i = 0;
  while (i < 20) {
    console.log(`${teo.name} says, "I'm sorry".`);
    i++;
  }
  console.log();
  
  console.log("To The Left! To The Left! Everything I want in the console to the left.");
  for (let prop in whateverQueenBeySaid) {
    console.log(whateverQueenBeySaid[prop]);
  }
  console.log();
  
  console.log("Using FOR IN LOOP, print the indexes of the array lana.");
  for (let index in lana) {
    console.log(index);
  }
  console.log();
  
  console.log("Using FOR OF LOOP, print the elements of the array tia.");
  for (let element of tia) {
    console.log(element);
  }
  console.log();

  console.log("Use forEach() to iterate over the array perscholas.");
  perscholas.forEach(function (person) {
    let message = "PS";
    console.log(`${message} ${person}`);
  });*/
  // ARRAYS
  /*
const fruits = ['apple', 'banana', 'orange'];

console.log(fruits[1]);

const joinedFruits = fruits.join(' ');
console.log(joinedFruits);

fruits.splice(2, 1);

fruits.push('strawberry', 'kiwi', 'grapes');

fruits.shift();

fruits.unshift('mango');

fruits.splice(1, 0, 'lemon', 'grapefruit');

fruits.splice(2, 2);

const exoticFruits = ['dragon fruit', 'passion fruit', 'guava'];

const allFruits = fruits.concat(exoticFruits);


console.log(exoticFruits.slice(1));


const sortedMonalissa = monalissaIsMessy.sort();

const reversedMirrorWords = mirrorMirrorOnTheWall.reverse();

const badWord = 'badword';
const filteredSentence = RafaelNoBadWords.split(' ').filter(word => word !== badWord).join(' ');

const total = numbersToAddUp.reduce((acc, num) => acc + num, 0);


console.log("\nResults:");
console.log("Fruits array:", fruits);
console.log("Joined Fruits:", joinedFruits);
console.log("Sorted Monalissa:", sortedMonalissa);
console.log("Reversed Mirror Words:", reversedMirrorWords);
console.log("Filtered Sentence:", filteredSentence);
console.log("Total of Numbers:", total); */
// IF ELSE
/*
const isTeoAPerson = true;

if (isTeoAPerson) {
  console.log('Teo is a person!');


  const isTeoMale = true;

  if (isTeoMale) {
    console.log('You got it right!');

    const isTeoHungry = false;

    if (isTeoHungry) {
      console.log("Let's buy Teo some tacos!");
    } else {
      console.log("He doesn't need to eat.");
    }
  } else {
    console.log('Wrong. Teo is going to remove you from the class.');
  }
} else {
  console.log('Teo is not a person!');
}

const isGustavoCoolest = true;
console.log(isGustavoCoolest ? 'You got that right!' : 'James wants to argue. He says he\'s the best!');*/
// FUNCTIONS 
/*

let ken = {
  name: "Ken",
  roomSpinning: false,
};


function spinRoom() {
  ken.roomSpinning = true;
  for (let i = 1; i <= 10; i++) {
    console.log(`Spin ${i} times...`);
  }
  ken.roomSpinning = false;
}


console.log(`${ken.name} has a headache today and says the room has been spinning like crazy.`);


spinRoom();


console.log(`${ken.name}'s room has finally stopped spinning. Phew!`);



const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}


const lana = ['l', 'a', 'n', 'a']


const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']


const perscholas = ['Amira', 'Arely', 'Jonathan'] 


let ken = {
  name: "Ken",
  roomSpinning: false,
};

function spinRoom() {
  ken.roomSpinning = true;
  for (let i = 1; i <= 10; i++) {
    console.log(`${ken.name}'s room is spinning ${i} times...`);
  }
  ken.roomSpinning = false;
}

console.log(`${ken.name} has a headache today and says the room has been spinning like crazy.`);
spinRoom();
console.log(`${ken.name}'s room has finally stopped spinning. Phew!\n`);

let teo = {
  name: "Teo",
  visionSpinning: false,
};

function spinVision() {
  teo.visionSpinning = true;
  for (let i = 1; i <= 20; i++) {
    console.log(`${teo.name}'s vision is spinning ${i} times...`);
  }
  teo.visionSpinning = false;
}

console.log(`${teo.name} said that was so mean of Teo to do Ken dirty like that.`);
spinVision();
console.log(`${teo.name}'s vision has finally stopped spinning. My bad!\n`);
*/

let lisa = {
  name: "Lisa",
};

let i = 0;
while (i < 20) {
  console.log(`${teo.name} says, "I'm sorry".`);
  i++;
}
console.log();

console.log("To The Left! To The Left! Everything I want in the console to the left.");
for (let prop in whateverQueenBeySaid) {
  console.log(whateverQueenBeySaid[prop]);
}
console.log();


console.log("Using FOR IN LOOP, print the indexes of the array lana.");
for (let index in lana) {
  console.log(index);
}
console.log();


console.log("Using FOR OF LOOP, print the elements of the array tia.");
for (let element of tia) {
  console.log(element);
}
console.log();


console.log("Use forEach() to iterate over the array perscholas.");
perscholas.forEach(function (person) {
  let message = "PS";
  console.log(`${message} ${person}`);
});

const fruits = ['apple', 'banana', 'orange']


const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]


const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]


const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."


const numbersToAddUp = [99, 5677, 232, 84, 2, 231]

const fruits = ['apple', 'banana', 'orange'];


console.log(fruits[1]);


const joinedFruits = fruits.join(' ');
console.log(joinedFruits);


fruits.splice(2, 1);


fruits.push('strawberry', 'kiwi', 'grapes');

fruits.shift();

fruits.unshift('mango');

fruits.splice(1, 0, 'lemon', 'grapefruit');

fruits.splice(2, 2);

const exoticFruits = ['dragon fruit', 'passion fruit', 'guava'];


const allFruits = fruits.concat(exoticFruits);


console.log(exoticFruits.slice(1));


const sortedMonalissa = monalissaIsMessy.sort();

const reversedMirrorWords = mirrorMirrorOnTheWall.reverse();


const badWord = 'badword';
const filteredSentence = RafaelNoBadWords.split(' ').filter(word => word !== badWord).join(' ');


const total = numbersToAddUp.reduce((acc, num) => acc + num, 0);


console.log("\nResults:");
console.log("Fruits array:", fruits);
console.log("Joined Fruits:", joinedFruits);
console.log("Sorted Monalissa:", sortedMonalissa);
console.log("Reversed Mirror Words:", reversedMirrorWords);
console.log("Filtered Sentence:", filteredSentence);
console.log("Total of Numbers:", total);

const isTeoAPerson = true;


if (isTeoAPerson) {
  console.log('Teo is a person!');


  const isTeoMale = true;


  if (isTeoMale) {
    console.log('You got it right!');


    const isTeoHungry = false;

    if (isTeoHungry) {
      console.log("Let's buy Teo some tacos!");
    } else {
      console.log("He doesn't need to eat.");
    }
  } else {
    console.log('Wrong. Teo is going to remove you from the class.');
  }
} else {
  console.log('Teo is not a person!');
}


const isGustavoCoolest = true;
console.log(isGustavoCoolest ? 'You got that right!' : 'James wants to argue. He says he\'s the best!');



const isTeoAPerson = true;


if (isTeoAPerson) {
  console.log('Teo is a person!');


  const isTeoMale = true;


  if (isTeoMale) {
    console.log('You got it right!');


    const isTeoHungry = false;


    if (isTeoHungry) {
      console.log("Let's buy Teo some tacos!");
    } else {
      console.log("He doesn't need to eat.");
    }
  } else {
    console.log('Wrong. Teo is going to remove you from the class.');
  }
} else {
  console.log('Teo is not a person!');
}


const isGustavoCoolest = true;
console.log(isGustavoCoolest ? 'You got that right!' : 'James wants to argue. He says he\'s the best!');
function sayGreeting() {
  console.log('Hello, ma\'amsir!');
}


function printString(str) {
  console.log(`This is my ${str}.`);
}


function add(num1, num2, num3) {
  const sum = num1 + num2 + num3;
  console.log(`The sum is ${sum}.`);
}


function fightClub(name) {
  switch (name) {
    case 'Teo':
      return '1st rule: You do not talk about Fight Club.';
    case 'Manara':
      return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.';
    case 'Liv':
      return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
    case 'Devin':
      return '4th rule: Only two guys to a fight.';
    default:
      return 'No shirts.';
  }
}


function hello() {
  console.log('Hello');
  return function () {
    console.log('Goodbye');
  };
}

const myFirstName = function () {
  const firstName = 'YourFirstName';
  console.log(`My name is ${firstName} LastName`);
};


const doubleNumber = (number) => number * 2;

// Invoking functions
sayGreeting();
printString('parameter');
add(5, 10, 15);
console.log(fightClub('Teo'));
const goodbyeFunction = hello();
goodbyeFunction();
myFirstName();
console.log(doubleNumber(7));


const sayGreeting = () => console.log('Hello, ma\'amsir!');


const printString = (str) => console.log(`This is my ${str}.`);

// Function: add
const add = (num1, num2, num3) => {
  const sum = num1 + num2 + num3;
  console.log(`The sum is ${sum}.`);
};


const fightClub = (name) => {
  switch (name) {
    case 'Teo':
      return '1st rule: You do not talk about Fight Club.';
    case 'Manara':
      return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.';
    case 'Liv':
      return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
    case 'Devin':
      return '4th rule: Only two guys to a fight.';
    default:
      return 'No shirts.';
  }
};


const hello = () => {
  console.log('Hello');
  return () => console.log('Goodbye');
};


const myFirstName = function () {
  const firstName = 'YourFirstName';
  console.log(`My name is ${firstName} LastName`);
};




sayGreeting();
printString('parameter');
add(5, 10, 15);
console.log(fightClub('Teo'));
const goodbyeFunction = hello();
goodbyeFunction();
myFirstName();
console.log(doubleNumber(7));