interface Thug {
  name: string;
  age: number;
}

const thug = { name: "John", age: 20 };
const thug2 = { name: "Ann", age: 30 };
const thugs = [thug, thug2];

const allowedToClub = (t: Thug) => t.age >= 21;

// Using standard `filter` function on array
const thugsAllowed = thugs.filter(allowedToClub);

const filterByReduce = <T>(items: T[], fn: (item: T) => boolean) =>
  items.reduce((acc, item) => (fn(item) ? acc.concat(item) : acc), [] as T[]);

// Using `reduce` function to implement `filter` function
console.log(filterByReduce(thugs, allowedToClub)); // [ { name: "Ann", age: 30 } ]
