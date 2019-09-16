/*function fizzBuzz(list1, list2) {
    // Your code here
}

module.exports = fizzBuzz;*/

for (var i=1; i < 50; i++){
    if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}