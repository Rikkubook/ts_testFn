import { describe, it, expect } from 'vitest';
import { arraySum } from './arraySum';

describe('計算陣列總和', () => {
  it('當輸入的陣列為 [1, 2, 3] 時，應該回傳 6', () => {
    expect(arraySum([1, 2, 3])).toBe(6);
  });

  it('當輸入的陣列為 [-1, -2, -3] 時，應該回傳 -6', () => {
    expect(arraySum([-1, -2, -3])).toBe(-6);
  });

  it('當輸入的陣列為空陣列時，應該回傳 0', () => {
    expect(arraySum([])).toBe(0);
  });
});