import { describe, it, expect } from 'vitest';
import { sortNumbers } from './numberSort';

describe('數字處理', () => {
  it('應能將給定的數字陣列進行排序', () => {
    expect(sortNumbers([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);
  });
});