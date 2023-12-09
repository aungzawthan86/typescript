"use strict";
class Car {
    start() {
        console.log(`Car is starting...`);
    }
    stop() {
        console.log(`Car is stopped..`);
    }
}
const car = new Car();
car.start();
car.stop();
