import { sayHello } from "./hello";

test('sayHello returns correct greeting', () => {
  expect(sayHello('World')).toBe('Hello, World!');
});