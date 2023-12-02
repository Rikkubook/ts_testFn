import { describe, it, expect } from 'vitest';
import { getBookCategory, BookCategory } from './bookCategoryEnum';

describe('書籍類別分類', () => {
  it('應根據輸入的書籍類別返回對應的描述', () => {
    expect(getBookCategory(BookCategory.Novel)).toBe('Book category: Novel');
  });
});