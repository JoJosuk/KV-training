import FizzBuzz from "../../src/utils/fizzBuzz.util";

describe("fizzBuzz test", () => {
  let fizzbuzz: FizzBuzz;
  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });
  it('should return "fizz" for numbers divisible by 3', () => {
    expect(fizzbuzz.fizzBuzz(3)).toBe("fizz");
    expect(fizzbuzz.fizzBuzz(6)).toBe("fizz");
    expect(fizzbuzz.fizzBuzz(9)).toBe("fizz");
    expect(fizzbuzz.fizzBuzz(12)).toBe("fizz");
    expect(fizzbuzz.fizzBuzz(18)).toBe("fizz");
  });
  it('should return "buzz" for numbers divisible by 5', () => {
    expect(fizzbuzz.fizzBuzz(5)).toBe("buzz");
    expect(fizzbuzz.fizzBuzz(10)).toBe("buzz");
    expect(fizzbuzz.fizzBuzz(20)).toBe("buzz");
    expect(fizzbuzz.fizzBuzz(15)).toBe("fizz buzz");
  });
  it('should return "fizz buzz" for numbers divisible by 5 and 3', () => {
    expect(fizzbuzz.fizzBuzz(15)).toBe("fizz buzz");
  });
  it("using mock", () => {
    let mockFn = jest.fn(fizzbuzz.divisibleByThree).mockReturnValue(true);
    fizzbuzz.divisibleByThree = mockFn;
    expect(fizzbuzz.fizzBuzz(4)).toBe("fizz");
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
  it("using spy", () => {
    let spy = jest.spyOn(fizzbuzz, "divisibleByThree");
    expect(fizzbuzz.fizzBuzz(4)).toBe("fizz");
    spy.mockRestore();
  });
});
