import { describe, it, expect } from 'vitest';
import { printStudentInfo } from './studentTuple';

describe('學生資訊處理', () => {
  it('應能將學生的姓名和分數正確地打印出來', () => {
    const student: [string, number] = ['Alice', 85];
    expect(printStudentInfo(student)).toBe('Alice: 85%');
  });
});