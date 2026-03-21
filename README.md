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
