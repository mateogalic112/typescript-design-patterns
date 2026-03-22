# TypeScript Design Patterns for Senior Developers

## Real world use-cases

Explore patterns and best practices that you can implement in your project!

## Builder Pattern

The Builder pattern separates the construction of a complex object from its representation, allowing the same construction process to create different configurations.

### When to use it

- When an object requires multiple configuration steps before it's ready to use
- When you want to avoid constructors with many parameters ("telescoping constructor")
- When the construction order shouldn't matter

### Implementation

`FileProcessorBuilder` constructs a `FileProcessor` — an object that reads a file and applies a chain of text transformations (preprocessors).

```ts
const processor = new FileProcessorBuilder()
  .setFilePath("./data.txt")
  .setEncoding("utf-8")
  .addPreprocessor((data) => data.toUpperCase())
  .addPreprocessor((data) => data.trim())
  .build();

const result = await processor.process();
```

- **`FileProcessorBuilder`** — Accumulates configuration via a fluent API. Validates required fields (e.g. `filePath`) in `build()` before constructing the product.
- **`FileProcessor`** — The product. Reads a file and applies preprocessors sequentially using `reduce`. All fields are `readonly` after construction.
- **`Preprocessor`** — A simple function type `(data: string) => string` that enables composable text transformations.

### Key design decisions

- **Validation at build time** — The builder throws if `filePath` is missing, catching misconfiguration before any I/O happens.
- **Immutable product** — `FileProcessor` fields are `readonly`, ensuring the built object can't be modified after construction.
- **Composable pipeline** — Preprocessors are plain functions, making them easy to test, reuse, and reorder.

## Prototype Pattern

The Prototype pattern creates new objects by cloning existing ones, avoiding expensive initialization that would otherwise run on every instantiation.

### When to use it

- When object creation involves a costly operation (file I/O, network calls, heavy computation)
- When you need many similar objects that differ only slightly
- When you want to avoid subclassing just to configure different initial states

### Implementation

`Soldier` is the base prototype with a `clone()` method. `Sniper` extends it with range-based attack logic. The heavy initialization runs once during construction — all subsequent copies are created via `clone()`, skipping it entirely.

```ts
const baseSniper = new Sniper({ speed: 5, strength: 10, range: 250 });
// Heavy operation runs once ^^^

const clone1 = baseSniper.clone(); // no heavy operation
const clone2 = baseSniper.clone(); // no heavy operation

clone1.attack(100); // Attacking 50
clone2.attack(300); // Out of range -> 0
```

- **`Prototype<T>`** — Interface that enforces a `clone(): T` contract on all cloneable classes.
- **`Soldier`** — Base class implementing `Prototype`. Uses `structuredClone` for deep copying and `Object.setPrototypeOf` to preserve the prototype chain.
- **`Sniper`** — Subclass that adds range-based attack logic. Inherits `clone()` without needing to override it.

### Key design decisions

- **Deep copy via `structuredClone`** — Ensures clones are fully independent. Nested objects and arrays are copied, not shared by reference.
- **Prototype chain preservation** — `Object.setPrototypeOf` restores the correct prototype after `structuredClone`, so `instanceof` and method resolution work on clones.
- **Dependency injection for initialization** — The `init` parameter defaults to `heavyInit` in production but can be replaced with a no-op in tests, eliminating the need for spies or mocks.
- **No redundant `clone()` overrides** — Subclasses inherit `clone()` from `Soldier` since `structuredClone` already copies all own properties.
