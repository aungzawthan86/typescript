interface MovieDetails {
  name: string;
  rating: number;
  printMovieInfo(name: string, price: number, rating: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movie1: MovieGenra = {
  name: "Star War",
  genra: "Action",

  rating: 8.9,
  printMovieInfo(name: string, price: number, rating: number): string | number {
    return `Movie Name: ${name} price: ${price} rating:${rating}`;
  },
};

const res = movie1;
console.log(res.printMovieInfo("John", 100, 9));
