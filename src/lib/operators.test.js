import { sum, countDigits } from "./operators";

test("adds 1 - 2 to equal 3", function() {
  expect(sum(1, 2)).toBe(3);
});
test("adds -1 + -2 to equal -3", function() {
  expect(sum(-1, -2)).toBe(-3);
});

test("count digits of 213", function() {
  const result = countDigits(213);
  expect(result).toBe(3);
});
test("count digits of 34287", function() {
  const result = countDigits(34287);
  expect(result).toBe(5);
});
test("count digits of -42", function() {
  const result = countDigits(-42);
  expect(result).toBe(3);
});
test("count digits of 0", function() {
  const result = countDigits(0);
  expect(result).toBe(1);
});
