
import { describe, it, expect } from 'vitest';
import { handleInput } from './inputHandler';

describe('處理各種輸入', () => {
  it('當輸入為字串時，應正確處理', () => {
    expect(handleInput('Hello')).toBe('Input is a string: Hello');
  });

  it('當輸入為數字時，應正確處理', () => {
    expect(handleInput(123)).toBe('Input is a number: 123');
  });
});
