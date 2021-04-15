const age = 19;
if (age >= 18) {
    console.log("Access approved. Please, enter the festival grounds!");
} else {
    console.log("Access denied, you are under 18. Please, leave the festival grounds.");
}

const isFemale = true;
if (isFemale === true) {
    console.log("Today is ladys night. Enjoy your stay!");
} else {
    console.log("Men arent alowed tonight. See you next time!");
}

const driverStatus = 'bob';
if (driverStatus === 'bob') {
    console.log("Your status: Bob. Drive safe!");
} else {
    console.log("Your status: Alcoholic. You are not allowed to drive.");
}

if (age >= 18  && age <= 25) {
    console.log("You are between 18 and 25. Your beers are 50% off!");
} else {
    console.log("No discount.");
}

const name = 'Tommy';
if (name === 'Sarah' || name === 'Bram') {
    console.log("It's our 50th anniversary, your first beer is free!");
} else {
    console.log("Please come in, it's our 50th anniversary!");
}

const totalAmount = 75;
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("You have spent more than €25,00. Free Croquettes!")
} if (totalAmount >= 50 && totalAmount < 100) {
    console.log("You have spent more than €50,00. Free Nachos!")
} if (totalAmount >= 100) {
    console.log("You have spent more than €100,00. Free bottle of Champagne!")
} else {
    console.log("Enjoy your drinks!")
}