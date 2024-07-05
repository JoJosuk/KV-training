export default class FizzBuzz {
  public fizzBuzz(num) {
    if (this.divisibleByThree(num) && num % 5 == 0) {
      return "fizz buzz";
    }
    if (this.divisibleByThree(num)) {
      return "fizz";
    } else if (num % 5 == 0) {
      return "buzz";
    }

    return num;
  }

  public divisibleByThree = (num) => {
    if (num % 3 === 0) return true;
    return false;
  };
}

const fizzBuzz = new FizzBuzz();

for (let i = 0; i < 20; i++) {
  console.log(fizzBuzz.fizzBuzz(i));
}
