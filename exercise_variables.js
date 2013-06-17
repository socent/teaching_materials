var future = 'You will be a ' + job + ' in ' + location + ', and married to ' + 
	partner + ' with ' + numKids + ' kids.';
console.log(future);

// Next problem

function tellFortune (job, location, partner, numKids) {
	var future = 'You will be a ' + job + ' in ' + location + ', and married to ' + 
	partner + ' with ' + numKids + ' kids.';
	console.log(future);
}

tellFortune('plumber', 'Buffalo', 'Rosie O'Donnel', 15 );
tellFortune('supermodel', 'LA', 'Prince', 0 );
tellFortune('filmmaker', 'Poso', 'yourself', 5 );

// Next problem

function calculateAge (currentYear, birthYear) {
	var age = currentYear - birthYear
	console.log('You are either ' + age + ' or ' (' + age + ' - 1));
}

calculateAge(2013, 1954);
calculateAge(1900, 1854);
calculateAge(2013, 1992);

// Next problem

function calculateSupply (age, numPerDay) {
	var ageDeath = 100;
	lifetimeSupply = (ageDeath - age) * (365 * 2);
	var message = 'You will need ' + lifetimeSupply + ' to last you until the ripe old age of ' + ageDeath + '.'
	console.log(message)
}

calculateSupply(34, 3);
calculateSupply(2, 2);
calculateSupply(65, 10);
