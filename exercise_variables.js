var future = 'You will be a ' + job + ' in ' + location + ', and married to ' + 
	partner + ' with ' + numKids + ' kids.';
console.log(future);


function tellFortune (job, location, partner, numKids) {
	var future = 'You will be a ' + job + ' in ' + location + ', and married to ' + 
	partner + ' with ' + numKids + ' kids.';
	console.log(future);
}

tellFortune('plumber', 'Buffalo', 'Rosie O'Donnel', 15 );
tellFortune('supermodel', 'LA', 'Prince', 0 );
tellFortune('filmmaker', 'Poso', 'yourself', 5 );


function calculateAge (currentYear, birthYear) {
	var age = currentYear - birthYear;
	console.log('You are either ' + age + ' or (' + age + ' - 1)';
}

calculateAge(2013, 1954);
calculateAge(1900, 1854);
calculateAge(2013, 1992);


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

function x(num) {
    var half    = halfOf(num);
    var squared = squareNumber(half);
    var area    = areaOfCircle(squared);
    var result  = percentOf(squared, area);
}

x(5);

function greaterNum(num1, num2) {
	if (num1 > num2) {
		return num 1;
	} else {
		return num2;
	}
}

greaterNum(3, 33);
greaterNum(33, 32);
console.log(The greater num of ' + num1 + ' and ' + num2 + ' is ' + greaterNum + '');

function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));


function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour pauvre petit';
    } else if (lang == 'es') {
        return 'Hola gringo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));


function assignGrade(score) {
    if (score > 89) {
        return 'A';
    } else if (score > 79) {
        return 'B';
    } else if (score > 69) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var i = 80; i <= 100; i++) {
  console.log('For ' + i + ', you got a ' + assignGrade(i));
}

console.log('You got a ' + assignGrade(91));
console.log('You got a ' + assignGrade(76));




function pluralize(noun, number) {
    if (number != 1 && noun) {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));


for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

var multiplier = 9;
for (var i = 0; i <= 10; i++) {
	var result = multiplier * i;
    console.log(multiplier + ' * ' + i + ' = ' + result);
}