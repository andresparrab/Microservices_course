// object representing a  drink
const drink: {
  color: string;
  carbonated: boolean;
  sugar: number;
} = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

console.log("the color of the drink is %s ", drink.color);

// making a type alias
type Drink = [string, boolean, number];
// Tuple reprenting diferents drinks that have the same variables
const pepsi: Drink = ["brown", true, 99];
const sprite: Drink = ["clear", true, 45];
const tea: Drink = ["yellow", false, 0];
console.log(pepsi);
