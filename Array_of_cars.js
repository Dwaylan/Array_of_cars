'use strict'
// length - Create an array called cars which consists of 4 different types of cars as String type.
//  The first car type should be Ford and includes Honda.
let cars = ['Ford', 'Honda,', 'Lexus','Audi']
console.log(cars)

// Console.log the length of the array.
console.log(cars.length)
// should return 4 in the terminal

// .concat() - Create another array called moreCars with 4 more different types of cars.
// The last car type should be Honda. Use the concat method
let moreCars = ['Merceedes', 'BMW', 'Land Rover', 'Honda']
console.log(moreCars)

//  to combine the cars and moreCars arrays into another array called totalCars.
// **The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.**
let totalCars = cars.concat(moreCars)
console.log(totalCars)

// .indexOf() and .lastIndexOf() - Use the indexOf method to console.log the index of Honda.
console.log(totalCars.indexOf('honda'))
console.log(totalCars.lastIndexOf('ford'))

// .join() - Use the join method to covert the array totalCars into a string called 
//stringOfCars.
let stringOfCars = totalCars.join(', ')
console.log(stringOfCars)

// .split() - Use the split method to convert stringOfCars back intro an array called
// totalCars.
totalCars = stringOfCars.split(', ')
console.log(totalCars)

// .reverse() - Use the reverse method to create an array carsInReverse which is the 
//array totalCars in reverse.
let carsInReverse = totalCars.reverse()
console.log(carsInReverse)