//	Collin Mullis' Program. 
// 	FizzBuzz Program
//	Program prints out numbers 1 through 100. If the number is divisible by 	3, then it will print out fizz instead, if its divisible by 5, it will 		print out buzz, and if it is divisible by both, then it will print fizzb	uzz, otherwise it will just print the number. 
for (var number = 1; number <=100; number++) {
	if (number %3 == 0 && number % 5 == 0)
		console.log("fizzbuzz");
	else if (number % 3 ==0)
		console.log("fizz");
	else if (number % 5 == 0)
		console.log("buzz");
	else 
		console.log(number);
}
