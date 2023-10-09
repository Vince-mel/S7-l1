console.log("ESERCIZIO 1: ");

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
    this.isOlderThan = function (y) {
      if (this.age > y.age) {
        return `${this.firstName}:(${this.age}) is older than ${y.firstName}:(${y.age})`;
      } else if (this.age === y.age) {
        return `${this.firstName}:(${this.age}) is the same age of ${y.firstName}:(${y.age})`;
      } else if (this.age < y.age) {
        return `${this.firstName}:(${this.age}) is younger than ${y.firstName}:(${y.age})`;
      }
    };
  }
}
const Me = new User("Vincenzo", "Melillo", 29, "Procida");
const Arnold = new User("Arnold", "Schwarzenegger", 76, "California");
const Prof = new User("Stefano", "Prof", 18, "NonLoSo");

console.log(Me.isOlderThan(Arnold));
console.log(Me.isOlderThan(Prof));
console.log(Arnold.isOlderThan(Me));
console.log(Arnold.isOlderThan(Prof));
console.log(Prof.isOlderThan(Me));
console.log(Prof.isOlderThan(Arnold));

console.log("ESERCIZIO 2:");

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
    this.hasSameOwner = function (y) {
      if (this.ownerName === y.ownerName) {
        return true;
      } else false;
    };
  }
}

const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const specie = document.getElementById("specie");
const breed = document.getElementById("Breed");
const btn = document.getElementById("btn");

let pets = [];
btn.addEventListener("click", function (e) {
  e.preventDefault();

  let z = new Pet(petName.value, ownerName.value, specie.value, breed.value);
  pets.push(z);
  console.log(z);
  const myList = document.getElementById("mylist");
  let newLi = document.createElement("li");
  newLi.innerText = `${z.petName}, ${z.ownerName}, ${z.species}, ${z.breed}`;
  myList.appendChild(newLi);
  newLi.classList.add("text-light");

  for (let y = 0; y < pets.length; y++) {
    if (z.ownerName === pets[y].ownerName && z.petName !== pets[y].petName) {
      return console.log(
        `${z.petName} has the same owner of ${pets[y].petName}`
      );
    }
  }
});
