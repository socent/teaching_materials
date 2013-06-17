// THE FORTUNE TELLER
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numKids = 2;
var partner = 'Monika';
var location = 'Toronto';
var jobTitle = 'entrepreneur';

var future = 'You will be a ' + jobTitle + ' in ' + location + ', and married to ' + 
	partner + ' with ' + numKids + ' kids.';
console.log(future);

// THE AGE CALCULATOR
// Forgot how old you are? Calculate it!

// Store the current year in a variable.
// Store your birth year in a variable.
// Calculate your 2 possible ages based on the stored values.
// Output them to the screen like so: "You are either NN or NN", substituting the values.

var currentYear = 2013;
var birthYear = 1979;

var age = currentYear - birthYear
console.log('You are either ' + age + ' or ' (' + age + ' - 1));

// THE LIFETIME SUPPLY CALCULATOR
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 34;
var oldMan = 100;
var numPerDay = 2;

var lifetimeSupply = (oldMan - age) * (365 * 2)
var message = 'You will need ' + lifetimeSupply + ' to last you until the ripe old age of ' + oldMan + '.'
console.log(message)