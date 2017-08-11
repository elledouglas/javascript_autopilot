var getNewCar = {
  'city': 'Toronto',
  'passenger': 0,
  'gas': 100
}
//
function addCar(car, newCar){
  car.push(newCar);
  console.log("Adding new car to fleet. Fleet size is now" + car);
}

//
//
//
//
//
//
//
function getDestination(car) {
  if (car.city === "Toronto") {
    console.log('Mississauga');
  }
  else if (car.city === "Mississauga") {
    console.log('London');
  }
  else if (car.city === 'London'){
    console.log('Toronto');
  }
}

function fillUpGas(car){
var oldGas = car.gas;
car.gas = 100;
console.log("Filled up to" + getGasDisplay(car.gas) + 'on gas from' + getGasDisplay(oldGas))
}

function getGasDisplay(gasAmount){
  console.log(gasAmount);
}

// function drive(car, cityDistance){
//  if (car.gas <= cityDistance);
//  console.log(fillUpGas(car);
//  }
//
//  car.gas = getDirections(car)
//  car.gas -=


function act(car){
var distanceBetweenCities = 50

// if (car.gas <= 20)

}

function commandFleet(cars){
  cars.each_with_index
}

function addOneCarPerDay(cars, numDays){

}


var cars = [];
addOneCarPerDay(cars, 10);
