import { describe, it, expect } from 'vitest';
import { findMaxNumber } from './maxNumber';

describe('找出最大數', () => {
  it('應該能正確找出陣列中的最大數', () => {
    expect(findMaxNumber([1, 3, 2])).toBe(3);
    expect(findMaxNumber([-1, -3, -2])).toBe(-1);
    expect(findMaxNumber([5])).toBe(5);
  });
});