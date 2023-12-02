import { describe, it, expect } from 'vitest';
import { isPositive } from './booleanChecker';

describe('布林值判斷', () => {
  it('當輸入為正數 5 時，應該返回 true', () => {
    expect(isPositive(5)).toBe(true);
  });

  it('當輸入為負數 -3 時，應該返回 false', () => {
    expect(isPositive(-3)).toBe(false);
  });

  it('當輸入為零時，應該返回 false', () => {
    expect(isPositive(0)).toBe(false);
  });
});