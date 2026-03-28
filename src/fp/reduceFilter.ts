interface Thug {
  name: string;
  age: number;
}

const thug_one = { name: "John", age: 20 };
const thug_two = { name: "Ann", age: 30 };

const thugs = [thug_one, thug_two];

// business logic function
const allowed = (t: Thug) => t.age >= 21;

// Using standard `filter` function on array
const tugsAllowed = thugs.filter(allowed);

const filterByReduce = <T>(items: T[], fn: (item: T) => boolean) =>
  items.reduce<T[]>((acc, item) => (fn(item) ? acc.concat(item) : acc), []);

// Using `reduce` function to implement `filter` function
console.log(filterByReduce(thugs, allowed)); // [ { name: "Ann", age: 30 } ]
