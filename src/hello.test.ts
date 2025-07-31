import { sayHello } from './hello';

test('sayHello returns correct greeting', () => {
  expect(sayHello('World')).toBe('Hello, World!');
});
test('sayHello returns correct greeting 2', () => {
  expect(sayHello('Hans')).toBe('Hello, Hans!');
});

test('sayHello returns correct greeting 3', () => {
  expect(sayHello('Hans Yulian')).toBe('Hello, Hans Yulian!');
});
