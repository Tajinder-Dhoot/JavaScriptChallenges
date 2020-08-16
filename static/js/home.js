function fun() {
    alert('Whats your age?');
    console.log('this is a function')
}

//fun();

function greetings() {
    var name = prompt('Whats your name?');
    console.log('Hello' + ' ' + name);
}

//greetings();

// Data types
let age = 25;
yourNAme= 'bob';
let name = {first: 'Jane', last: 'Doe'}; //object
let groceries = ['apple', 'orange']; //array

console.log(groceries);

//new line
let fruit = 'banana\norange';
console.log(fruit);

//array
let fruits = ['apple', 'orange', 'grapes', 'watermelon'];
let vegetables = ['tomato', 'brocolli', 'asparagus', 'carrot'];


for (let i=0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common methods
console.log(fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits); //append items at last 

let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());

let numbers = [5, 12, 4, 8, 6, 14, 1]
console.log(numbers.sort()); //sort in random order
console.log(numbers.sort(function(a, b) {return a-b})); //sort in ascending order
console.log(numbers.sort(function(a, b) {return b-a})); //sort in descending order

let student = {
    first: 'Tajinder Singh',
    last: 'Dhoot',
    age: 25,
    height: 170,
    studentInfo: function() {
        return this.first + '\n' + this.last;
    }
};

console.log(student.first);
console.log(student.age);
student.age++;
console.log(student.age);
console.log(student.studentInfo());




