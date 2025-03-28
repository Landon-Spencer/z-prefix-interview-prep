class Calculator {
  constructor() {
    this.state = 0;
  }

  getCurrentState () {
    return this.state;
  }

  addInputs (...numbers) {
    this.state = 0;
    // console.log(numbers);
    numbers.forEach((number) => {
      this.state += number;
      // console.log(`current state ${this.state} and number added ${number}`);
    });
    return this.state;
  }

  multiplyInputs (...numbers) {
    this.state = 1;
    numbers.forEach((number) => this.state *= number);
    return this.state;
  }

  divideInputs (a, b = 1) {
    return a / b;
  }

  subtractInputs (...numbers) {
    this.state = numbers[0];
    numbers.splice(0, 1);
    numbers.forEach((number) => this.state -= number);
    return this.state;
  }

  toPower (a, b) {
    return a ** b;
  }

  squareRoot (a) {
    return Math.round((Math.sqrt(a) * 100)) / 100;
  }

  clearCurrentStatus () {
    this.state = 0;
    return true;
  }

  negPosReversal (a) {
    if (a > 0) {
      return a - (2 * a);
    } else {
      return Math.abs(a);
    }
  }


}

module.exports = Calculator