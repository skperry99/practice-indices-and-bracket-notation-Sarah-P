/*
Practice: Indices and Bracket
Notation
Instructions
You are managing a library system where books and movies are stored in a 2D
array, with each row representing a shelf, and each column representing an item
on that shelf.
Tasks
Make sure to write the code for each task using only bracket notation.
Task 1: Create a multi-dimensional array with nine books and/or movies of your
choice.
Task 2: Access and log all the elements in the array using bracket notation with
numbers.
Task 3: Access and log all the elements in the array using bracket notation with
variables as indices. Use the variables row and item.
Task 4: Write a loop that prints all the items on the second shelf.
*/

let myShelf = [["Atomic Habits","Lean In","Think Again"],
            ["Moana","Tangled","Bolt"],
            ["Casablanca","The Shining","Juice"]];

console.log(myShelf[0][0]);
console.log(myShelf[0][1]);
console.log(myShelf[0][2]);
console.log(myShelf[1][0]);
console.log(myShelf[1][1]);
console.log(myShelf[1][2]);
console.log(myShelf[2][0]);
console.log(myShelf[2][1]);
console.log(myShelf[2][2]);

for(let row=0;row<3;row++){
    for(let item=0;item<3;item++){
        console.log(myShelf[row][item]);
        }
    }

for (let i = 0; i < myShelf[1].length; i++) {
    console.log(myShelf[1][i]);
    }
