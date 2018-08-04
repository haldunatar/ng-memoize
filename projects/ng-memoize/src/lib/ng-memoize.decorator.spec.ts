import { ngMemoize } from './ng-memoize.decorator';

describe('MemoizeService', () => {
  let calculator;
  let sumCalled = 0;
  let clearCalled = 0;
  let multiplyCalled = 0;

  beforeEach(() => {
    class Calculator {
      @ngMemoize()
      sum(a, b) {
        sumCalled += 1;
        return a + b;
      }

      @ngMemoize()
      multiply(a, b) {
        multiplyCalled += 1;
        return a * b;
      }

      @ngMemoize()
      clear() {
        clearCalled += 1;
        return 0;
      }
    }
    calculator = new Calculator();
  });

  it('should be able to memoize correctly', () => {
    expect(calculator.sum(4, 5)).toBe(9);
    expect(calculator.sum(4, 5)).toBe(9);
    expect(calculator.sum(4, 5)).toBe(9);
    expect(calculator.sum(6, 6)).toBe(12);

    expect(sumCalled).toBe(2);

    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(4, 5)).toBe(20);

    expect(multiplyCalled).toBe(2);

    expect(calculator.clear()).toBe(0);
    expect(calculator.clear()).toBe(0);
    expect(calculator.clear()).toBe(0);

    expect(clearCalled).toBe(1);
  });
});
