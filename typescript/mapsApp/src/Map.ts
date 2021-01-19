// This is a classs that i can use Whenever I need to show a map
// and as long as any other class/object fullfull to tahave a location object
// I will be able to pass it as argument to addMArker and show it in the map.
// like plug and play
// Instruction to every other class
// on how they can be an argument to `addMarker`
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
// import "googlemaps";
export class CustomMap {
  // properties/ fields
  private myMap: google.maps.Map;
  public addSomeMarker: google.maps.Marker;

  // constructor
  constructor(divID: string) {
    this.myMap = new google.maps.Map(
      document.getElementById(divID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 50,
          lng: 10,
        },
      }
    );
    // Hardcoded addMarker for testing purpusoes first
    //   (this.addSomeMarker = new google.maps.Marker({
    //     position: {
    //       lat: 50,
    //       lng: 10,
    //     },
    //     map: this.myMap,
    //     title: "Hello World!",
    //   }));
  }

  // Methods
  addMarker(mappable: Mappable): void {
    const info = new google.maps.InfoWindow({
      content: mappable.markerContent(),
      position: mappable.location,
    });
    const thisMarker = new google.maps.Marker({
      map: this.myMap,
      position: mappable.location,
    });

    thisMarker.addListener("click", () => {
      info.open(this.myMap, thisMarker);
    });
  }

  // This will work but then i have to write two functions use interface instead like above

  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.myMap,
  //       position: user.location,
  //       title: user.name,
  //     });
  //   }

  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       position: company.location,
  //       title: `${company.companyName},\n ${company.catchPhrase}`,
  //       map: this.myMap,
  //     });
  //   }
}
