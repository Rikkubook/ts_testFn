import { describe, it, expect } from 'vitest';
import { add100, add, subtract, multiply, divide } from './calculator';

describe('簡單計算器', () => {
  it('當輸入 5 和 3 時，加法函式應返回 8', () => {
    expect(add(5, 3)).toBe(8);
  });

  it('當輸入 10 和 4 時，減法函式應返回 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('當輸入 7 和 6 時，乘法函式應返回 42', () => {
    expect(multiply(7, 6)).toBe(42);
  });

  it('當輸入 8 和 2 時，除法函式應返回 4', () => {
    expect(divide(8, 2)).toBe(4);
  });

  it('當嘗試除以零時，應拋出 "Cannot divide by zero" 錯誤', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});

describe('受限加法函數', () => {
  it('當輸入 40 和 30 時，應返回 70', () => {
    expect(add100(40, 30)).toBe(70);
  });

  it('當輸入的兩數和超過 100 時，應返回 100', () => {
    expect(add100(60, 50)).toBe(100);
  });

  it('當輸入的其中一數為負數時，應正確進行加法運算', () => {
    expect(add100(-20, 30)).toBe(10);
  });
});