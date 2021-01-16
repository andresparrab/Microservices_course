const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates: Date[] = [new Date(), new Date()];

const carByMake: string[][] = [["f150"], ["corolla"], ["camero"]];

// Help with inference when extracting values
const mycar: string = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2020-12-34"];
importantDates.push("2012-34-56");
importantDates.push(new Date());
