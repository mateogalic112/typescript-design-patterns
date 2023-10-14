const duplicate = (x: number): number => x + x;
const addTwo = (x: number): number => x + 2;

const mapTR =
  <V, W>(fn: (x: V) => W) =>
  <A>(reducer: (am: A, wm: W) => A) =>
  (accum: A, value: V): A =>
    reducer(accum, fn(value));

// transducer functions
const duplicateR = mapTR(duplicate);
const addTwoR = mapTR(addTwo);

// reducer function
const addToArray = <V>(a: V[], v: V): V[] => {
  return [...a, v];
};

const testArray = [22, 9, 60];

const resultArrayI = testArray.reduce<number[]>(
  duplicateR(addTwoR(addToArray)),
  []
); // [ 46, 20, 122 ]

// Explicit way
const resultArrayII = testArray.reduce<number[]>(
  (acc, item) =>
    duplicateR<number[]>(addTwoR<number[]>(addToArray))(acc, item),
  []
);
