interface Vehicule {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

let car1 = new Car("Toyota", "Corolla", 2020);
car1.start();
