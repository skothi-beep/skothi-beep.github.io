
// Function that takes in numberofsides as a parameter and returns polygon name
function getShape(numberofsides) {
    if (numberofsides == 0)
        alert ("There is no polygon name for 0");
    if (numberofsides == 1)
        alert ("A polygon with 1 side is called a henagon!");
    if (numberofsides == 2)
        alert ("A polygon with 2 sides is called a digon!");
    if (numberofsides == 3) 
        alert ("A polygon with 3 sides is called a trigon!");
    if (numberofsides == 4)
        alert ("A polygon with 4 sides is called a tetragon!");
    if (numberofsides == 5)
        alert ("A polygon with 5 sides is called a pentagon!");
    if (numberofsides == 6)
        alert ("A polygon with 6 sides is called a hexagon!");
    if (numberofsides == 7)
        alert ("A polygon with 7 sides is called a heptagon!");
    if (numberofsides == 8) 
        alert ("A polygon with 8 sides is called a octagon!");
    if (numberofsides == 9)
        alert ("A polygon with 9 sides is called a enneagon!");
    if (numberofsides == 10)
        alert ("A polygon with 10 sides is called a decagon!");
}

//Function to validate the entry numberofsides
function validateEntry(numberofsides) {
    if(isNaN(numberofsides) || numberofsides > 10) {
        alert ("Please enter a number that is between 0 - 10");
        numberofsides = prompt("The Sapphire Kangaroo Inc would like a number: ");
        getShape(numberofsides);
    } else if (numberofsides < 0) {
        numberofsides = Math.abs(numberofsides);
    } else if (numberofsides % 1 != 0) {
        numberofsides = Math.round(numberofsides);
    }
    return numberofsides;
}

//prompting user to ender a number
var numberofsides = prompt("The Sapphire Kangaroo Inc would like a number: ");

//validating the entry with the function validateEntry and assigning it to validatedEntry
var validatedEntry = validateEntry(numberofsides);

//Calling getShape() with validatedentry
getShape(validatedEntry);