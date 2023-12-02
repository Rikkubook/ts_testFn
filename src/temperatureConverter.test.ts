import { describe, it, expect } from 'vitest';
import { celsiusToFahrenheit } from './temperatureConverter';

describe('溫度轉換器', () => {
  it('正確將攝氏溫度轉換為華氏溫度', () => {
    expect(celsiusToFahrenheit(0)).toBe(32); // 水的冰點
    expect(celsiusToFahrenheit(100)).toBe(212); // 水的沸點
  });
});
