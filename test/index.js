import assert from "assert";
import fizzbuzz from "../index.js";

describe("fizzbuzz", () => {
  it("return Fizzbuzz when value is divisible by 15", () => {
    assert(fizzbuzz(30), "Fizzbuzz");
  });

  it("return Fizz when value is divisible by 3", () => {
    assert(fizzbuzz(9), "Fizz");
  });

  it("return Buzz when value is divisible by 5", () => {
    assert(fizzbuzz(10), "Buzz");
  });

  it("return value when value is not divisible by 3 or 5", () => {
    assert(fizzbuzz(7), "7");
  });
});
