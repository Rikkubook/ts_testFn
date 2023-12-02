import { describe, it, expect } from 'vitest';
import { vehicleInfo } from './vehicleInterface';

describe('車輛介面', () => {
  it('給定車輛的品牌、型號和年份，應返回車輛的詳細資訊', () => {
    const vehicle = { brand: 'Toyota', model: 'Corolla', year: 2020 };
    expect(vehicleInfo(vehicle)).toBe('Toyota Corolla (2020)');
  });
});