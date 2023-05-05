let counter = 0;

// 1. Create an object containing the `getCount`, `increment`, and `decrement` method.
const counterObject = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

// 2. Freeze the object using the `Object.freeze` method, to ensure the object is not modifiable.
const singletonCounter = Object.freeze(counterObject);

// 3. Export the object as the `default` value to make it globally accessible.
export default singletonCounter;

// ********** Approach 2
// We could even export the frozen object directly, without having to declare multiple variables.

// let counter = 0;

// export default Object.freeze({
//   getCount: () => counter,
//   increment: () => ++counter,
//   decrement: () => --counter,
// });
