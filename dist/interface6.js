"use strict";
const myCar = {
    brand: "BMW",
    model: "8477",
    start() {
        console.log(`my Car is startring..`);
    },
    stop() {
        console.log(`my Car is stopped..`);
    },
};
console.log(`${myCar.brand}`);
console.log(`${myCar.model}`);
myCar.start();
myCar.stop();
