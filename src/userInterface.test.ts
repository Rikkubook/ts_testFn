import { describe, it, expect } from 'vitest';
import { getFullName } from './userInterface';

describe('用戶全名生成', () => {
  it('給定名和姓，應返回完整的用戶全名', () => {
    const user = { firstName: 'John', lastName: 'Doe' };
    expect(getFullName(user)).toBe('John Doe');
  });
});