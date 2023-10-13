interface Thug {
  name: string;
  age: number;
}

const thug = { name: "John", age: 20 };
const thug2 = { name: "Ann", age: 30 };
const thugs = [thug, thug2];

const CLUB_AGE_LIMIT = 21;
const allowedToClub = (t: Thug) => t.age >= CLUB_AGE_LIMIT;

// Using standard `filter` function on array
const thugsAllowed = thugs.filter(allowedToClub);

const filterByReduce = <T extends Thug>(
  items: T[],
  fn: (item: T) => boolean
) =>
  items.reduce<Thug[]>(
    (acc, item) => (fn(item) ? [...acc, item] : acc),
    []
  );

// Using `reduce` function to implement `filter` function
console.log(filterByReduce(thugs, allowedToClub)); // [ { name: "Ann", age: 30 } ]
