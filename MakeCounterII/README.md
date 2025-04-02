# Task

Implement a function makeCounter that accepts an optional integer value (defaults to 0) and returns an object that contains the following methods:

- get(): returns the current value.
- increment(): increments the current value and returns it.
- decrement(): decrements the current value and returns it.
- reset(): resets the current value to the initial value.

## Examples

```
const counter = makeCounter();
counter.get(); // 0
counter.increment(); // 1
counter.increment(); // 2
counter.get(); // 2
counter.reset(); // 0
counter.decrement(); // -1
```
