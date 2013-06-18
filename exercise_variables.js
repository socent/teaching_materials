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
	var age = currentYear - birthYear;
	console.log('You are either ' + age + ' or (' + age + ' - 1)';
}

calculateAge(2013, 1954);
calculateAge(1900, 1854);
calculateAge(2013, 1992);

// Next problem

function calculateSupply (age, numPerDay) {
	var ageDeath = 100;
	lifetimeSupply = (ageDeath - age) * (365 * 2);
	var message = 'You will need ' + lifetimeSupply + ' to last you until the ripe old age of ' + ageDeath + ';
	console.log(message);
}

calculateSupply(34, 3);
calculateSupply(2, 2);
calculateSupply(65, 10);

function squareNumber (num, numSquared) { 
	var numSquared = num * num;
	console.log(The result of squaring the number ' + num + ' is ' + numSquared + ' );
	// return numSquared;
}

num(3)

function halfOf(num) (num, halvedNum) {
	var half = num / 2;
	console.log('half of ' + num + '' is ' + half + ';
	return half;
}

halfNumber(10)


function percentOf(num1, num2) {
	var percentOf = 100(num1/num2);
	console.log(' + num1 + ' is 50% of ' +num2 + '); //like this or no? double ''
}

num1(33);
num2(300);


function areaOfCircle(radius) {
	var area = Math.PI * squareNum(radius);
	console.log('The area of circle with radius ' + radius + ' is ' + area')
	return area;
}

base = 33;
height 

function x(num) {
	var half = num / 2;
	var squareNum = half * half;
	squareNum = radius;
	circleArea = MATH.PI * numSquared(radius)
	areaPercentage = 100(circleArea / 
	console.log ;

}

// CORRECT ANSWER here (but is mine far off?)
// function doCrazyStuff(num) {
//     var half    = halfOf(num);
//     var squared = squareNumber(half);
//     var area    = areaOfCircle(squared);
//     var result  = percentOf(squared, area);
// }

// doCrazyStuff(5);