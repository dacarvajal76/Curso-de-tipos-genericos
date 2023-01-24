// Implementación de genéricos con tipos y clases personalizados

interface Car {
  make: string
  doors: number
}

class ElectricCar implements Car {
  make = 'Electric car';
  doors = 4;
}

class Truck implements Car {
  make = 'truck';
  doors = 2;
}

function accelerate<T extends Car>(car: T): T {
  console.log(`All ${car.doors} doors are closed.`);
  console.log(`The ${car.make} is now accelerating!`);
  return car;
}

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);

let myTruck = new Truck;
accelerate<Truck>(myTruck);