export default function throttle(func, wait) {
  let lastTimeExecuted = 0;
  let lastValue;
  return function (...args) {
    if (Date.now() - lastTimeExecuted > wait) {
      lastTimeExecuted = Date.now();
      lastValue = func.call(this, ...args);
    }
    return lastValue;
  };
}
