const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//We are goin to destructure the age of the object profile in the most simple way
const { age } = profile;
//but if we need to write annotaion for the {age} then we have to write
const { age }: { age: number } = profile;

//We are goint to get the lat from the profile object in the simple way
const {
  coords: { lat, lng },
} = profile;

//Now we need to write the annotation
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
