import faker from "faker";
import { Mappable } from "./Map";
export class User implements Mappable {
  // implements Mappable means that it has to satisfy  all the Mappable properties  in this case location object  and markerContent method
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.findName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `${"User Name".bold()}: ${this.name}`;
  }
}
