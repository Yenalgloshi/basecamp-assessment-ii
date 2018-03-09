// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

// CODE HERE
var me = {
  firstname:"Jason",
  age:48,
  state:"Utah"
};
// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'favecolor' and set it to your favorite color as a string

//CODE HERE
me.faveColor = "blue";
// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
}
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
message['text'] = "Run To The Hills";
// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

// CODE HERE
var adjustCount = {
  upVote:function(num1){
    return num1 + 1
  },
  downVote:function(num2){
    return num2 - 1
  }
};
// #5 Create an array called 'myFriends' with four of your friends names

// CODE HERE
var myFriends = [
  "Britt",
  "Noah",
  "Tucker",
  "Willow"
];
// #6 Add a fifth friends name to the end of your myFriends array

// CODE HERE
myFriends[4] = "Kiwi";

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4]
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
var myArrayCopy = myArray.slice();

// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222]
//DON'T TOUCH THE CODE ABOVE

// CODE HERE
var evensArray = [];
function evensOnly(arr){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) { 
      evensArray.push(arr[i]);
    }
  }
  return evensArray;
}
evensOnly(myNumbers);
console.log(evensArray);

// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
]
var trueFriends = [];
peopleIknow.filter(function(val,i,arr){
  if(arr[i].friend === true){
    trueFriends.push(val.name);
  }
});

// #10 create a function caled indexFinder and loop ove the randomNumbers array below and return a new array called 'indexes' with just their indexes. Be sure to invoke indexFinder.
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0]
let indexes = [];

function indexFinder(a){
  for(var i = 0; i < a.length; i++) {
    indexes.push(i);
  }
};
indexFinder(randomNumbers);

