const addTwo = (x: number) => x + 2;
const duplicate = (x: number) => x + x;

const mapTR =
  <V>(fn: (x: V) => V) =>
  (reducer: (am: V[], wm: V) => V[]) =>
  (accum: V[], value: V): V[] =>
    reducer(accum, fn(value));

// transducer functions
const addTwoR = mapTR(addTwo);
const duplicateR = mapTR(duplicate);

// reducer function
const addToArray = <V>(acc: V[], val: V) => acc.concat(val);

// Magic happens here
const result = [22, 9, 60].reduce(duplicateR(addTwoR(addToArray)), []);

console.log(result); // [ 46, 20, 122 ]
