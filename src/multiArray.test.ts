import { describe, it, expect } from 'vitest';
import { processMultiArray } from './multiArray';

describe('處理多維陣列', () => {
  it('應該將二維陣列的每個元素都加倍', () => {
    const arr = [[1, 2], [3, 4], [5, 6]];
    expect(processMultiArray(arr)).toEqual([[2, 4], [6, 8], [10, 12]]);
  });
});