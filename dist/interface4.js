"use strict";
const movie1 = {
    name: "Star War",
    genra: "Action",
    rating: 8.9,
    printMovieInfo(name, price, rating) {
        return `Movie Name: ${name} price: ${price} rating:${rating}`;
    },
};
const res = movie1;
console.log(res.printMovieInfo("John", 100, 9));
