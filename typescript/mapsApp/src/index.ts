import { User } from "./User";
import { Company } from "./Company";
import "googlemaps";
import { CustomMap } from "./Map";
const user = new User();
// console.log(user);
const company = new Company();
// console.log(company);
const newMap = new CustomMap("mymap");

newMap.addMarker(user);
newMap.addMarker(company);
