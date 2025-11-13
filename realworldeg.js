const movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Avatar", rating: 7.0 },
  { title: "Flash", rating: 6.5 }
];

const topMovies = movies.filter(movie => movie.rating > 7);
const topMovieTitles = topMovies.map(movie => movie.title);

console.log("All Movies:", movies.map(m => m.title));
console.log("Top Rated:", topMovieTitles);
console.log("Count of Top Movies:", topMovieTitles.length);
