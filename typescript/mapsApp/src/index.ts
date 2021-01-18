// import { User } from "./User";
// import { Company } from "./Company";
import "googlemaps";
// const user = new User();
// console.log(user);
// const company = new Company();
// console.log(company);

new google.maps.Map(document.getElementById("mymap"), {
  zoom: 15,
  center: {
    lat: 50,
    lng: 10,
  },
});

let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
