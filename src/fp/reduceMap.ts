interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

const person = { firstName: "John", lastName: "Doe", age: 20 };
const person2 = { firstName: "Ann", lastName: "Doe", age: 30 };

const persons = [person, person2];

const concatFullName = (p: Person) => p.firstName + " " + p.lastName;

// Using standard `map` function on array
let fullNames = persons.map(concatFullName);

const mapByReduce = <T>(items: T[], fn: (item: T) => string) =>
  items.reduce((acc, item) => acc.concat(fn(item)), [] as string[]);

// Using `reduce` function to implement `map` function
console.log(mapByReduce(persons, concatFullName)); // [ 'John Doe', 'Ann Doe' ]
