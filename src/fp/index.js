const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
    );

const ourRead = promisify((...args) => fs.readFile(...args));

ourRead("some_file.txt")
  .then((data) => data)
  .catch((err) => err);

// or equivalently

try {
  data = await ourRead("some_file.txt");
  /* do something with data */
} catch (err) {
  /* process error err */
}
