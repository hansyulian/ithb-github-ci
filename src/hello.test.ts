import { sayHello } from "./hello";

test('sayHello returns correct greeting', () => {
  expect(sayHello('World')).toBe('Hello, World!');
});
test('sayHello returns correct greeting 2', () => {
  expect(sayHello('Hans')).toBe("Hello, Hans!");
});