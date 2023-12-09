class Dog {
  bark() {
    console.log("woff woff");
  }
}
class Cat {
  meow() {
    console.log("Meow Meow");
  }
}
function animalSound(anaimal: Dog | Cat) {
  if (anaimal instanceof Dog) {
    anaimal.bark();
  } else {
    anaimal.meow();
  }
}
animalSound(new Dog());
