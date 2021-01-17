//Interface that required all the types and functions
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// Interface for drinks
interface Drinks {
  color: string;
  carbonated: boolean;
  sugar: number;
  summary(): string;
}

// This interface just required the summary() to be present even if there are other varialbles
// Like in oldCivic and drinks. You can use the same interface type for both
interface summaryReport {
  summary(): string;
}

const oldCivic: Vehicle = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `This awsome vehicle is ${this.name}, ${this.year}, ${this.broken}`;
  },
};

// object representing  drinks
const drinks: Drinks = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// with type anotation
const prinVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(vehicle);
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

// Using type ALIAS
type vehicleType = { name: string; year: number; broken: boolean };
const prinVehicle2 = ({ name, year, broken }: vehicleType): void => {
  console.log(`Name of the car: ${name}`);
  console.log(`Year of the car: ${year}`);
  console.log(`Name of the car: ${broken}`);
};
// Using the INTERFACE obs, here summary will return undefined.
// it would work if you write like printVehicle4

const prinVehicle3 = ({ name, year, broken, summary }: Vehicle): void => {
  console.log(`Name of the CAR: ${name}`);
  console.log(`Year of the CAR: ${year}`);
  console.log(`Name of the CAR: ${broken}`);
  console.log(summary());
};

const prinVehicle4 = (vehicle: Vehicle): void => {
  console.log(`Name of the CAR: ${vehicle.name}`);
  console.log(`Year of the CAR: ${vehicle.year}`);
  console.log(`Name of the CAR: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

// Here we just need to asign item: VehicleReport
const printSummary = (item: summaryReport): void => {
  console.log(item.summary());
};
prinVehicle(oldCivic);
prinVehicle2(oldCivic);
prinVehicle3(oldCivic);
console.log(
  " this is the function that not return undefined when call summary()"
);
prinVehicle4(oldCivic);
printSummary(oldCivic);
printSummary(drinks);
printSummary(drinks);
