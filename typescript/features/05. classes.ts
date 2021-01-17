// class deficnition
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("honk honk");
  }
}

// object of type Vehicle
const vehicle = new Vehicle("red");
console.log(vehicle.color);
// vehicle.drive();
//vehicle.honk();

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("brum brum "); //method override
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
    console.log("this car has %s", this.wheels);
  }
}
const car = new Car(4, "blue");

car.startDrivingProcess();
console.log(car.color);
