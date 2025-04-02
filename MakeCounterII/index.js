export default function makeCounter(initialValue = 0) {
  let value = initialValue;
  const counter = {
    get: () => value,
    increment: () => ++value,
    decrement: () => --value,
    reset: () => {
      value = initialValue;
      return value;
    },
  };
  return counter;
}
