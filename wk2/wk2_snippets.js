// Primitive types
var x = true;
var y = false;

var str = 'some text';
var str2 = "other text";

var num = 2;
var num2 = 3;

console.log(x);
console.log(str2);
console.log(num2);

var num2 = 'other text';
console.log(num2);
//------------------------------------------------------------------------------------------------

// Strings
console.log(str2.length);
console.log(str2.charAt(0));
console.log(str2.concat(' and some ', str2));   // Original not affected, returns a new string
console.log(str2.indexOf('text'));              // -1 if not found, else, starting indexOf
console.log(str2.replace('text', 'stuff'));     // Returns a new string
console.log(str2.slice(6, str2.length));        // Returns 'text'
console.log(str2.split(' '));                   // Returns ['other', 'text']
console.log(str2.toUpperCase());                // Returns a new string
console.log(str2.toLowerCase());                // Returns a new string
//------------------------------------------------------------------------------------------------

// Operators
// Assume familiarity with arithmetic Operators
console.log(num);
num++;
console.log(num);
console.log(str == str2);
console.log(str != str2);
console.log(str == str2 ? 'equal' : 'not equal');
//------------------------------------------------------------------------------------------------

// Functions
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));

var add2 = (num1, num2) => {
    return num1 + num2;
}
console.log(add2(num1, num2));

// Not that you are not forced to supply all arguments and can supply more
// Functions don't have to return values
//------------------------------------------------------------------------------------------------

// Objects
var person = {};
person.firstName = 'frank';
person.lastName = 'ibem';
person.health = 100;
console.log(person);

var person2 = {
    firstName: 'madison',
    lastName: 'martin',
    health: 37
};
console.log(person2);

// The following statements are equivalent
console.log(person.firstName);
console.log(person["firstName"]);

// Objects can also have methods. Use 'this' to refer properties defined on the object
var person3 = {
    firstName: 'madison',
    lastName: 'martin',
    health: 37,
    print: function () {
        console.log(this.firstName + ' ' + this.lastName + ' ' + this.health);
    }
};

person3.print();
//------------------------------------------------------------------------------------------------


// Arrays
var arr1 = [];
var arr2 = new Array();

var arr1 = [1, 2, 3];
var arr2 = new Array(1, 2, 3);  // Declares an array with 3 elements: 1, 2, 3

// With single value, specifies the size/length
var arr = new Array(10);        // Declares an array of size 10 (all elements are undefined)

// Arrays don't have to have the same type of objects (they are not homogenous)
var arr = [1, '2', { name: 'frank' }];
console.log(arr);

// Arrays are 0-indexed
var arr = ['some', 'text', 'here'];
console.log(arr.join(' '));

var arr = [1, 2, 3, 4, 5, 6];
console.log(arr.pop());         // removes last item (tail), shift removes the first item (head)
console.log(arr);

console.log(arr.push(0));       // adds item to tail, unshift adds item to head
console.log(arr);

arr.reverse();
console.log(arr);

var arr = [5, 4, 6, 3, 2, 1];
arr.sort();
console.log(arr);

// Sort in descending order
var arr = [5, 4, 6, 3, 2, 1];
arr.sort((a, b) => {
    return b - a;
});
console.log(arr);

arr.splice(1, 3);
console.log(arr);

var arr = [1, 2, 3, 4, 5, 6];
var result = arr.filter(x => x % 2 == 0);
console.log(result);

var players = [
    { name: 'madison', health: 37 },
    { name: 'frank', health: 100 },
    { name: 'lauren', health: 60 }
]
var healthy = players.find(player => player.health == 100);
console.log(healthy);

console.log(players.find(player => player.health < 100));       // Find returns the first occurence
console.log(players.filter(player => player.health < 100));     // Filter returns all occurences

// findIndex returns the index of the first matching element or -1

console.log(players.every(player => player.health > 0));
console.log(players.every(player => player.health == 100));
console.log(players.some(player => player.health == 100));

// forEach applies a function to each element (example of string interpolation)
players.forEach(player => console.log(`Name: ${player.name}, health: ${player.health}`));

// map converts each object to a new object and returns the new array
var healths = players.map(player => player.health);
console.log(healths);
//------------------------------------------------------------------------------------------------

// Conditional statements
if (players.length == 0) {
    console.log('No player');
} else if (players.length == 1) {
    console.log('Single player');
} else {
    console.log('Multiplayer');
}

x = 'a';
switch (x) {
    case 'b':
        console.log('Letter is b');
        break;
    case 'a':
        console.log('Letter is a');
        break;
    default:
        console.log('dunno');
}
//------------------------------------------------------------------------------------------------

// Loops
for (var i = 0; i < players.length; i++) {
    console.log(players[i]);
}

for (var player of players) {
    console.log(player);
}

var i = 0;
while (i < players.length) {
    console.log(players[i]);
    i++;
}