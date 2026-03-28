interface Person {
  firstName: string;
  lastName: string;
}

const person_one = {
  firstName: "John",
  lastName: "Doe",
};
const person_two = {
  firstName: "Ann",
  lastName: "Doe",
};

const persons = [person_one, person_two];

// business logic function
const concatFullName = (p: Person) => p.firstName + " " + p.lastName;

// Using standard `map` function on array
let fullNames = persons.map(concatFullName);

const mapByReduce = <T, R>(items: T[], fn: (item: T) => R) =>
  items.reduce<R[]>((acc, item) => acc.concat(fn(item)), []);

// Using `reduce` function to implement `map` function
console.log(mapByReduce(persons, concatFullName)); // [ 'John Doe', 'Ann Doe' ]
