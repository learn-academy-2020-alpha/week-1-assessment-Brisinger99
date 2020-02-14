// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212


// create a function that takes in one argument
// tells if the argument is above, below, or at 212
const tempTest = (temp) => {
    if (temp > 212) {
        return `${temp} is above the boiling point.`
    } else if (temp < 212) {
        return `${temp} is below the boiling point.`
    } else if (temp === 212) {
        return "212 is at the boiling point."
    }
}
console.log(tempTest(35));
console.log(tempTest(350));
console.log(tempTest(212));


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

// create a function that takes in an arrray and multipies it by 5
const multipier = (array) => {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 5)
    }
    return newArray
}
console.log (multipier(myNumbers1))

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const mapMultipier = (array) => {
    let newArray = array.map (value => value * 5)
    return newArray
}
console.log (mapMultipier(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const remover = (string) => {
    let newArray1 = string.split("")
    let newArray2 = newArray1.filter (value => value !== "a" && value !== "e" &&value !== "i" && value !== "o" && value !== "u" && value !== "I")
    return newArray2.join("")
}
console.log(remover(stringWithVowels1));
console.log(remover(stringWithVowels2));


// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42

const remover2 = (string) => {
    if (typeof string === "string") {
        let newArray1 = string.split("")
        let newArray2 = newArray1.filter (value => value !== "a" && value !== "e" &&value !== "i" && value !== "o" && value !== "u" && value !== "I")
        return newArray2.join("")
    } else {
        return ("Please enter a string.")
    }
}
console.log(remover2(notAString1));
console.log(remover2(notAString2));



// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const animalFinder = (array) => {
    let newArray = array.filter(value => value.animal === "cat")
    return (newArray)
}
console.log(animalFinder(toonimals));

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

const animalFinder2 = (array) => {
    let newArray = array.filter(value => value.animal !== "cat")
    let newArray2 = newArray.map(value => value.name)
    return (newArray2)
}
console.log(animalFinder2(toonimals));
