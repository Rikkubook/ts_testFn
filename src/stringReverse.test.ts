import { describe, it, expect } from 'vitest';
import { reverseString } from './stringReverse';

describe('字串反轉', () => {
  it('當輸入 "hello" 時，應該回傳 "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('當輸入空字串時，應該回傳空字串', () => {
    expect(reverseString('')).toBe('');
  });

  it('當輸入單一字元 "a" 時，應該回傳 "a"', () => {
    expect(reverseString('a')).toBe('a');
  });
});