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
console.log('You are either ' + age + ' or ' + (age - 1));
