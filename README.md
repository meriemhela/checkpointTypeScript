# What You're Aiming For

Follow the Instructions below and try to solve the exercise:


# Instructions

## 1. Define an interface named Vehicle with the following properties:
    - make of type string
    - model of type string
    - year of type number
    - start method which returns void and logs "Engine started" to the console.
  ### Solution : 
      interface Vehicule {
        make: string;
        model: string;
        year: number;
        start(): void;
      }
      
## 2. Implement a class named Car that implements the Vehicle interface. The Car class should have:
    - A constructor that initializes the make, model, and year properties.
    - Implement the start method to log "Car engine started" to the console.
  ### Solution : 
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

## 3. Create an instance of the Car class and initialize it with some values for make, model, and year.
  ### Solution : 
      let car1 = new Car("Toyota", "Corolla", 2020);

## 4. Call the start method on the instance of the Car class to verify that it logs the appropriate message to the console.
  ### Solution : 
      car1.start();
![image](https://github.com/user-attachments/assets/c978f446-f53d-47ae-bbcf-82e232278efe)

## 5. Finally, compile your TypeScript code into JavaScript and run it to ensure everything works as expected.
  ### Solution : 
      tsc app.ts
      node app.js
